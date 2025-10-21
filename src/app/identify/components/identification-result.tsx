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
        <Image src={imagePreviewUrl} alt="識別されたコイン" fill className="object-contain p-2" />
      </div>

      {!identification.isCoin ? (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">コインを識別できませんでした</CardTitle>
            <CardDescription>
              AIは提供された画像からコインを検出できませんでした。より鮮明な画像で再度お試しください。
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">識別結果</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                    <p className="text-muted-foreground">起源</p>
                    <p className="font-semibold">{identification.origin}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-muted-foreground">時代</p>
                    <p className="font-semibold">{identification.historicalPeriod}</p>
                </div>
                 <div className="space-y-1 col-span-full">
                    <p className="text-muted-foreground">推定価値</p>
                    <p className="font-semibold">{identification.estimatedValue}</p>
                </div>
            </div>

            <Separator />
            
            <div>
              <h3 className="font-semibold mb-2">説明</h3>
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <Button onClick={onReset} variant="outline" className="w-full">
        別のコインを識別
      </Button>
    </div>
  );
}
