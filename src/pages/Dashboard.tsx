
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Play, 
  Download,
  Mic,
  TrendingUp,
  Video
} from "lucide-react";

const recentMeetings = [
  {
    id: 1,
    title: "Weekly Team Standup",
    date: "2024-01-08",
    time: "09:00",
    duration: "45 min",
    attendees: 8,
    status: "completed",
    hasTranscript: true,
    hasSummary: true,
  },
  {
    id: 2,
    title: "Product Strategy Review",
    date: "2024-01-07",
    time: "14:30",
    duration: "90 min",
    attendees: 12,
    status: "completed",
    hasTranscript: true,
    hasSummary: true,
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "2024-01-07",
    time: "11:00",
    duration: "60 min",
    attendees: 6,
    status: "processing",
    hasTranscript: false,
    hasSummary: false,
  },
];

const upcomingMeetings = [
  {
    id: 4,
    title: "Sprint Planning",
    date: "2024-01-09",
    time: "10:00",
    attendees: 10,
  },
  {
    id: 5,
    title: "Quarterly Business Review",
    date: "2024-01-09",
    time: "15:00",
    attendees: 15,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Your meeting insights and recent activity</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Video className="w-4 h-4" />
            <span>Join Meeting</span>
          </Button>
          <Button className="gradient-primary text-white">
            <Mic className="w-4 h-4 mr-2" />
            Start Recording
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meeting Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.5</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +18% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transcripts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +22% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Meetings */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Meetings</CardTitle>
              <CardDescription>Your latest meeting activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium">{meeting.title}</h3>
                        <Badge
                          variant={meeting.status === "completed" ? "default" : "secondary"}
                        >
                          {meeting.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{meeting.date} at {meeting.time}</span>
                        <span>{meeting.duration}</span>
                        <span>{meeting.attendees} attendees</span>
                      </div>
                      {meeting.status === "processing" && (
                        <div className="mt-2">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span>Processing transcript...</span>
                            <Progress value={65} className="w-20 h-2" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {meeting.hasTranscript && (
                        <Button size="sm" variant="outline">
                          <Play className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      )}
                      {meeting.hasSummary && (
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Meetings */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>From your Teams calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="p-3 border rounded-lg"
                  >
                    <h4 className="font-medium text-sm">{meeting.title}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        {meeting.date} at {meeting.time}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {meeting.attendees} attendees
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Upload Recording
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Invite Team Member
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
