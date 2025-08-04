
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Settings as SettingsIcon, 
  Shield, 
  Bell,
  Mic,
  Calendar,
  Download,
  Trash2,
  ExternalLink
} from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your RT.Meet preferences and integrations</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="recording">Recording</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@company.com" />
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Teams Integration */}
        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Microsoft Teams Integration</span>
              </CardTitle>
              <CardDescription>
                Manage your Teams connection and calendar settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Connection Status */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Microsoft Teams</h3>
                  <p className="text-sm text-muted-foreground">Connected as john.doe@company.com</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">Connected</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Reconfigure
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Auto-join Settings */}
              <div className="space-y-4">
                <h3 className="font-medium">Auto-join Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-join">Auto-join scheduled meetings</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically join Teams meetings from your calendar
                      </p>
                    </div>
                    <Switch id="auto-join" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="early-join">Join meetings early</Label>
                      <p className="text-sm text-muted-foreground">
                        Join meetings 2 minutes before scheduled time
                      </p>
                    </div>
                    <Switch id="early-join" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="calendar-sync">Sync calendar events</Label>
                      <p className="text-sm text-muted-foreground">
                        Import Teams meetings from your calendar
                      </p>
                    </div>
                    <Switch id="calendar-sync" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              {/* CRM Integration */}
              <div className="space-y-4">
                <h3 className="font-medium">CRM Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Salesforce</p>
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">HubSpot</p>
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recording Settings */}
        <TabsContent value="recording" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mic className="w-5 h-5" />
                <span>Recording & Transcription</span>
              </CardTitle>
              <CardDescription>
                Configure your recording and AI processing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Recording Options */}
              <div className="space-y-4">
                <h3 className="font-medium">Recording Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-record">Auto-record meetings</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically start recording when joining meetings
                      </p>
                    </div>
                    <Switch id="auto-record" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="speaker-detection">Speaker identification</Label>
                      <p className="text-sm text-muted-foreground">
                        Detect and label different speakers in transcripts
                      </p>
                    </div>
                    <Switch id="speaker-detection" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="real-time">Real-time transcription</Label>
                      <p className="text-sm text-muted-foreground">
                        Show live transcription during meetings
                      </p>
                    </div>
                    <Switch id="real-time" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* AI Processing */}
              <div className="space-y-4">
                <h3 className="font-medium">AI Processing</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="transcription-model">Transcription Model</Label>
                    <Select defaultValue="whisper">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whisper">OpenAI Whisper (Recommended)</SelectItem>
                        <SelectItem value="assemblyai">AssemblyAI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="summary-model">Summary Generation</Label>
                    <Select defaultValue="gpt4">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt4">GPT-4 (Best Quality)</SelectItem>
                        <SelectItem value="gpt3.5">GPT-3.5 Turbo (Faster)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-summary">Auto-generate summaries</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically create meeting summaries and action items
                      </p>
                    </div>
                    <Switch id="auto-summary" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Notifications */}
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-summaries">Meeting summaries</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email summaries after each meeting
                      </p>
                    </div>
                    <Switch id="email-summaries" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-reminders">Meeting reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Get reminded about upcoming meetings
                      </p>
                    </div>
                    <Switch id="email-reminders" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-action-items">Action item updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications when action items are completed
                      </p>
                    </div>
                    <Switch id="email-action-items" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Push Notifications */}
              <div className="space-y-4">
                <h3 className="font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-processing">Processing complete</Label>
                      <p className="text-sm text-muted-foreground">
                        When transcription and summary are ready
                      </p>
                    </div>
                    <Switch id="push-processing" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-mentions">Team mentions</Label>
                      <p className="text-sm text-muted-foreground">
                        When you're mentioned in shared notes
                      </p>
                    </div>
                    <Switch id="push-mentions" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Privacy & Data</span>
              </CardTitle>
              <CardDescription>
                Manage your data privacy and retention settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Data Retention */}
              <div className="space-y-4">
                <h3 className="font-medium">Data Retention</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="retention-period">Recording retention period</Label>
                    <Select defaultValue="1year">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1month">1 Month</SelectItem>
                        <SelectItem value="3months">3 Months</SelectItem>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="1year">1 Year (Recommended)</SelectItem>
                        <SelectItem value="forever">Forever</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-1">
                      Recordings and transcripts will be automatically deleted after this period
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="gdpr-compliant">GDPR compliant processing</Label>
                      <p className="text-sm text-muted-foreground">
                        Ensure all data processing follows GDPR guidelines
                      </p>
                    </div>
                    <Switch id="gdpr-compliant" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Data Export */}
              <div className="space-y-4">
                <h3 className="font-medium">Data Export</h3>
                <p className="text-sm text-muted-foreground">
                  Export all your data including recordings, transcripts, and summaries
                </p>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Request Data Export
                </Button>
              </div>

              <Separator />

              {/* Account Deletion */}
              <div className="space-y-4">
                <h3 className="font-medium text-destructive">Danger Zone</h3>
                <div className="p-4 border border-destructive/20 rounded-lg">
                  <h4 className="font-medium mb-2">Delete Account</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
