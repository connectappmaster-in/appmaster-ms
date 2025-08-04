
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Video,
  Plus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  const meetings = [
    {
      id: 1,
      title: "Sprint Planning",
      date: "2024-01-09",
      time: "10:00",
      duration: "2h",
      attendees: 10,
      type: "teams",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Quarterly Business Review",
      date: "2024-01-09", 
      time: "15:00",
      duration: "1.5h",
      attendees: 15,
      type: "teams",
      status: "upcoming"
    },
    {
      id: 3,
      title: "1:1 with Sarah",
      date: "2024-01-10",
      time: "14:00", 
      duration: "30min",
      attendees: 2,
      type: "teams",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Design Review",
      date: "2024-01-10",
      time: "16:00",
      duration: "1h",
      attendees: 6,
      type: "teams", 
      status: "upcoming"
    }
  ];

  const todayMeetings = meetings.filter(m => m.date === "2024-01-09");
  const upcomingMeetings = meetings.filter(m => m.date > "2024-01-09");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Your Microsoft Teams meetings and schedule</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
          <Button className="gradient-primary text-white">
            <Video className="w-4 h-4 mr-2" />
            Join Meeting
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{currentMonth}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Simple Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Adjust for month start
                  const isToday = day === 9;
                  const hasMeeting = day === 9 || day === 10;
                  
                  return (
                    <div
                      key={i}
                      className={`
                        aspect-square p-2 text-center text-sm border rounded-lg cursor-pointer
                        ${day < 1 || day > 31 ? 'text-muted-foreground/30' : ''}
                        ${isToday ? 'bg-primary text-primary-foreground font-medium' : ''}
                        ${hasMeeting && !isToday ? 'bg-primary/10 border-primary/20' : ''}
                        hover:bg-muted/50
                      `}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                      {hasMeeting && (
                        <div className="w-1 h-1 bg-primary rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Today</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                  <span>Has meetings</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Meeting Lists */}
        <div className="space-y-4">
          {/* Today's Meetings */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayMeetings.length > 0 ? (
                  todayMeetings.map((meeting) => (
                    <div key={meeting.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{meeting.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          Teams
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{meeting.time} • {meeting.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{meeting.attendees} attendees</span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full mt-2" variant="outline">
                        <Video className="w-3 h-3 mr-1" />
                        Join Meeting
                      </Button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No meetings scheduled for today
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Meetings */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{meeting.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {meeting.date}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{meeting.time} • {meeting.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{meeting.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teams Integration Status */}
          <Card>
            <CardHeader>
              <CardTitle>Integration Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Microsoft Teams</span>
                  <Badge variant="default">Connected</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Calendar Sync</span>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-Join</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                Manage Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
