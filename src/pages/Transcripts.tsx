
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Calendar, 
  Clock,
  Users,
  FileText,
  Upload
} from "lucide-react";

const Transcripts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const transcripts = [
    {
      id: 1,
      title: "Weekly Team Standup",
      date: "2024-01-08",
      duration: "45 min",
      attendees: 8,
      status: "completed",
      size: "2.3 MB",
      wordCount: 3245,
      summary: "Team discussed dashboard redesign progress, API optimizations, and QA testing updates.",
      tags: ["standup", "team", "progress"]
    },
    {
      id: 2,
      title: "Product Strategy Review",
      date: "2024-01-07", 
      duration: "90 min",
      attendees: 12,
      status: "completed",
      size: "5.1 MB",
      wordCount: 7892,
      summary: "Quarterly review of product roadmap, market analysis, and strategic initiatives.",
      tags: ["strategy", "roadmap", "quarterly"]
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "2024-01-07",
      duration: "60 min", 
      attendees: 6,
      status: "processing",
      size: "3.7 MB",
      wordCount: 0,
      summary: "Processing...",
      tags: ["client", "presentation"]
    },
    {
      id: 4,
      title: "Engineering Deep Dive",
      date: "2024-01-06",
      duration: "120 min",
      attendees: 15,
      status: "completed",
      size: "8.2 MB", 
      wordCount: 12043,
      summary: "Technical discussion on architecture improvements and performance optimizations.",
      tags: ["engineering", "technical", "architecture"]
    },
    {
      id: 5,
      title: "1:1 with Sarah Wilson",
      date: "2024-01-05",
      duration: "30 min",
      attendees: 2,
      status: "completed",
      size: "1.1 MB",
      wordCount: 1567,
      summary: "Career development discussion and project feedback session.",
      tags: ["1:1", "career", "feedback"]
    }
  ];

  const filteredTranscripts = transcripts.filter(transcript => {
    const matchesSearch = transcript.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transcript.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transcript.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = filterStatus === "all" || transcript.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transcripts</h1>
          <p className="text-muted-foreground">Search and manage your meeting transcripts</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Recording
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transcripts, summaries, or topics..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-3">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredTranscripts.length} transcript{filteredTranscripts.length !== 1 ? 's' : ''} found
        </p>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Total words: {transcripts.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.wordCount, 0).toLocaleString()}</span>
        </div>
      </div>

      {/* Transcripts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredTranscripts.map((transcript) => (
          <Card key={transcript.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{transcript.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {transcript.summary}
                  </CardDescription>
                </div>
                <Badge
                  variant={transcript.status === "completed" ? "default" : "secondary"}
                  className="ml-2"
                >
                  {transcript.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* Meeting Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{transcript.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{transcript.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{transcript.attendees} attendees</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <span>{transcript.size}</span>
                </div>
                {transcript.status === "completed" && (
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <span className="w-4 h-4 text-center">📝</span>
                    <span>{transcript.wordCount.toLocaleString()} words</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {transcript.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <Button size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                {transcript.status === "completed" && (
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTranscripts.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No transcripts found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "Try adjusting your search query or filters." : "Upload a recording or attend a meeting to see transcripts here."}
            </p>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Recording
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Transcripts;
