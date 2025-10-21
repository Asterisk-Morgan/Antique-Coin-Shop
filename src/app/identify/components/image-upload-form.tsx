"use client";

import { useState } from "react";
import Image from "next/image";
import { identifyCoinFromPhoto } from "@/ai/flows/identify-coin-from-photo";
import type { IdentifyCoinFromPhotoOutput } from "@/ai/flows/identify-coin-from-photo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload } from "lucide-react";
import { IdentificationResult } from "./identification-result";
import { getPlaceholderImageById } from "@/lib/placeholder-images";

type Status = "idle" | "loading" | "success" | "error";

export function ImageUploadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<IdentifyCoinFromPhotoOutput | null>(
    null
  );
  const [photoDataUri, setPhotoDataUri] = useState<string>("");
  const { toast } = useToast();
  
  const placeholderImage = getPlaceholderImageById("coin-upload-placeholder");


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUri = e.target?.result as string;
        setPhotoDataUri(dataUri);
        setPreviewUrl(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!photoDataUri) {
      toast({
        variant: "destructive",
        title: "No photo selected",
        description: "Please choose a photo of your coin to identify.",
      });
      return;
    }
    setStatus("loading");
    setResult(null);

    try {
      const response = await identifyCoinFromPhoto({ photoDataUri });
      if (response) {
        setResult(response);
        setStatus("success");
      } else {
        throw new Error("Invalid response from AI");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Identification Failed",
        description: "There was an error identifying your coin. Please try again.",
      });
    }
  };
  
  const handleReset = () => {
    setStatus("idle");
    setPreviewUrl(null);
    setResult(null);
    setPhotoDataUri("");
  }

  if (status === "success" && result) {
    return <IdentificationResult result={result} imagePreviewUrl={previewUrl!} onReset={handleReset} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="coin-photo">Coin Photo</Label>
        <div className="relative flex justify-center items-center w-full h-64 border-2 border-dashed border-border rounded-lg bg-background/50">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Coin preview"
              fill
              className="object-contain rounded-lg p-2"
            />
          ) : placeholderImage && (
             <Image
              src={placeholderImage.imageUrl}
              alt={placeholderImage.description}
              fill
              className="object-contain rounded-lg p-4 opacity-30"
              data-ai-hint={placeholderImage.imageHint}
            />
          )}
           <Input
            id="coin-photo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={status === 'loading'}
          />
          {!previewUrl && (
            <div className="text-center text-muted-foreground pointer-events-none">
              <Upload className="mx-auto h-12 w-12" />
              <p>Click or drag file to this area to upload</p>
            </div>
          )}
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={status === "loading" || !photoDataUri}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Identifying...
          </>
        ) : (
          "Identify Coin"
        )}
      </Button>
    </form>
  );
}
