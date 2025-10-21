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
          <CardTitle className="text-3xl font-headline">AIコイン識別</CardTitle>
          <CardDescription>
            謎のコインをお持ちですか？写真をアップロードすると、AIが識別を試みます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ImageUploadForm />
        </CardContent>
      </Card>
    </div>
  );
}
