import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageUploadForm } from "./components/image-upload-form";

export default function IdentifyCoinPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">AI Coin Identifier</CardTitle>
          <CardDescription>
            Have a mysterious coin? Upload a photo and our AI will attempt to
            identify it for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ImageUploadForm />
        </CardContent>
      </Card>
    </div>
  );
}
