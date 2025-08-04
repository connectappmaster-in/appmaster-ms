
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Shield, Calendar, Mic, Users } from "lucide-react";

const TeamsOAuth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Connect Microsoft Teams</h1>
            <p className="text-muted-foreground mt-2">
              Enable RT.Meet to access your Teams meetings and calendar
            </p>
          </div>
        </div>

        {/* Permission Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Permissions Required</span>
            </CardTitle>
            <CardDescription>
              RT.Meet needs the following permissions to provide AI meeting assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Calendar Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Read your Teams meeting schedule to enable auto-join and meeting preparation
                  </p>
                  <Badge variant="outline" className="mt-1">Required</Badge>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mic className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Meeting Recording</h3>
                  <p className="text-sm text-muted-foreground">
                    Record meetings for transcription and AI-powered insights
                  </p>
                  <Badge variant="outline" className="mt-1">Required</Badge>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Participant Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify meeting participants for accurate speaker diarization
                  </p>
                  <Badge variant="secondary" className="mt-1">Optional</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Card */}
        <Card>
          <CardHeader>
            <CardTitle>What you'll get</CardTitle>
            <CardDescription>
              Once connected, RT.Meet will enhance your Teams meetings with:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Automatic meeting transcription</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">AI-generated meeting summaries</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Action item extraction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Speaker identification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Searchable meeting archives</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Calendar integration</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-900 dark:text-amber-100">
                  Your privacy is our priority
                </p>
                <p className="text-amber-800 dark:text-amber-200 mt-1">
                  All recordings and transcripts are encrypted and stored securely. 
                  RT.Meet is GDPR compliant and never shares your data with third parties.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="flex-1 gradient-primary text-white">
            <Shield className="w-4 h-4 mr-2" />
            Connect Microsoft Teams
          </Button>
          <Button size="lg" variant="outline" className="flex-1">
            Learn More
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            By connecting, you agree to our{" "}
            <a href="#" className="underline hover:text-foreground">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-foreground">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamsOAuth;
