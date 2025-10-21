"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { IdentifyCoinFromPhotoOutput } from "@/ai/flows/identify-coin-from-photo";

interface IdentificationResultProps {
  result: IdentifyCoinFromPhotoOutput;
  imagePreviewUrl: string;
  onReset: () => void;
}

export function IdentificationResult({ result, imagePreviewUrl, onReset }: IdentificationResultProps) {
  const { identification, description } = result;

  return (
    <div className="space-y-6">
      <div className="relative w-full h-64 rounded-lg overflow-hidden border shadow-inner">
        <Image src={imagePreviewUrl} alt="Identified Coin" fill className="object-contain p-2" />
      </div>

      {!identification.isCoin ? (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Could Not Identify a Coin</CardTitle>
            <CardDescription>
              Our AI could not detect a coin in the image provided. Please try again with a clearer picture.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Identification Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                    <p className="text-muted-foreground">Origin</p>
                    <p className="font-semibold">{identification.origin}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-muted-foreground">Historical Period</p>
                    <p className="font-semibold">{identification.historicalPeriod}</p>
                </div>
                 <div className="space-y-1 col-span-full">
                    <p className="text-muted-foreground">Estimated Value</p>
                    <p className="font-semibold">{identification.estimatedValue}</p>
                </div>
            </div>

            <Separator />
            
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <Button onClick={onReset} variant="outline" className="w-full">
        Identify Another Coin
      </Button>
    </div>
  );
}
