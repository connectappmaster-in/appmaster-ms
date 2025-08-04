
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  Users, 
  Download, 
  Share, 
  Play,
  Calendar,
  CheckCircle,
  MessageCircle,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const MeetingDetails = () => {
  const { id } = useParams();

  const meeting = {
    id: 1,
    title: "Weekly Team Standup",
    date: "2024-01-08",
    time: "09:00 - 09:45",
    duration: "45 min",
    attendees: [
      { name: "John Doe", role: "Product Manager", avatar: "JD" },
      { name: "Sarah Wilson", role: "Designer", avatar: "SW" },
      { name: "Mike Johnson", role: "Developer", avatar: "MJ" },
      { name: "Emily Chen", role: "QA Lead", avatar: "EC" },
    ],
    status: "completed",
    recordingUrl: "#",
    transcript: [
      {
        speaker: "John Doe",
        time: "00:02",
        text: "Good morning everyone. Let's start with our weekly standup. Sarah, would you like to go first?"
      },
      {
        speaker: "Sarah Wilson", 
        time: "00:15",
        text: "Sure! This week I've been working on the user dashboard redesign. I completed the wireframes and high-fidelity mockups. Next, I'll be collaborating with Mike on the implementation."
      },
      {
        speaker: "Mike Johnson",
        time: "00:35", 
        text: "Thanks Sarah. I've been focusing on the backend API optimizations. We've improved response times by 40%. I'm ready to start on the dashboard frontend implementation."
      },
      {
        speaker: "Emily Chen",
        time: "00:55",
        text: "Great progress everyone. I've been updating our test suites and preparing for the upcoming release. Found a few edge cases that we should address."
      }
    ],
    summary: "Team discussed progress on dashboard redesign, API optimizations showing 40% improvement in response times, and QA preparations for upcoming release.",
    actionItems: [
      { id: 1, task: "Complete dashboard frontend implementation", assignee: "Mike Johnson", dueDate: "2024-01-12", completed: false },
      { id: 2, task: "Address QA edge cases", assignee: "Emily Chen", dueDate: "2024-01-10", completed: false },
      { id: 3, task: "Review design specifications with development team", assignee: "Sarah Wilson", dueDate: "2024-01-09", completed: true },
    ],
    topics: [
      "Dashboard Redesign Progress",
      "Backend API Optimizations", 
      "QA Testing Updates",
      "Release Preparation"
    ]
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold">{meeting.title}</h1>
            <Badge variant="default">Completed</Badge>
          </div>
          <div className="flex items-center space-x-4 text-muted-foreground mt-2">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{meeting.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{meeting.time} ({meeting.duration})</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{meeting.attendees.length} participants</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Play className="w-4 h-4 mr-2" />
            Play Recording
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="transcript" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="actions">Action Items</TabsTrigger>
              <TabsTrigger value="topics">Topics</TabsTrigger>
            </TabsList>

            <TabsContent value="transcript" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Meeting Transcript</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Search transcript..." className="w-64" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {meeting.transcript.map((entry, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-medium">
                              {entry.speaker.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">{entry.speaker}</span>
                            <span className="text-xs text-muted-foreground">{entry.time}</span>
                          </div>
                          <p className="text-sm leading-relaxed">{entry.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="summary" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Summary</CardTitle>
                  <CardDescription>Key points and insights from the meeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p>{meeting.summary}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Action Items</CardTitle>
                  <CardDescription>Tasks and follow-ups from the meeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {meeting.actionItems.map((item) => (
                      <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <CheckCircle 
                          className={`w-5 h-5 mt-0.5 ${
                            item.completed ? 'text-green-500' : 'text-muted-foreground'
                          }`}
                        />
                        <div className="flex-1">
                          <p className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {item.task}
                          </p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                            <span>Assigned to: {item.assignee}</span>
                            <span>Due: {item.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Topics</CardTitle>
                  <CardDescription>Main topics covered in the meeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {meeting.topics.map((topic, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Participants */}
          <Card>
            <CardHeader>
              <CardTitle>Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {meeting.attendees.map((attendee, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-medium">{attendee.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{attendee.name}</p>
                      <p className="text-xs text-muted-foreground">{attendee.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Meeting Info */}
          <Card>
            <CardHeader>
              <CardTitle>Meeting Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Duration</label>
                <p className="text-sm">{meeting.duration}</p>
              </div>
              <Separator />
              <div>
                <label className="text-xs font-medium text-muted-foreground">Recording</label>
                <p className="text-sm">Available</p>
              </div>
              <Separator />
              <div>
                <label className="text-xs font-medium text-muted-foreground">Transcript</label>
                <p className="text-sm">Completed</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
