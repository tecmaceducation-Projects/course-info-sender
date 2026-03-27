import { useState } from "react";
import { courses, generateMessage } from "@/data/courses";
import { Check, Copy, GraduationCap, Search } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const filtered = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.subjects.toLowerCase().includes(search.toLowerCase())
  );

  const selected = courses.find((c) => c.code === selectedCode);
  const message = selected ? generateMessage(selected) : "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    toast.success("Message copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card py-6">
        <div className="container mx-auto px-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">TecMac Message Generator</h1>
            <p className="text-sm text-muted-foreground">Generate WhatsApp-ready course promotions</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        {/* Left: Course Selection */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-3">
            {filtered.map((course) => (
              <button
                key={course.code}
                onClick={() => setSelectedCode(course.code)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedCode === course.code
                    ? "border-primary bg-secondary shadow-md"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {course.code}
                    </span>
                    <h3 className="mt-1.5 font-semibold text-foreground">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{course.subjects}</p>
                  </div>
                  {selectedCode === course.code && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No courses found.</p>
            )}
          </div>
        </div>

        {/* Right: Message Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Message Preview</h2>
            {selected && (
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            )}
          </div>

          <div className="rounded-lg border border-border bg-card p-5 min-h-[400px]">
            {selected ? (
              <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed">
                {message}
              </pre>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground py-20">
                Select a course to preview the message
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
