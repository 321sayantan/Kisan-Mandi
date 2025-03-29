import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowUpCircle, MessageCircle, User } from "lucide-react";

// interface QuestionCardProps {
//   id: string;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
//   votes: number;
//   answers: number;
//   tags: string[];
// }

const QuestionCard = ({
  id,
  title,
  content,
  author,
  date,
  votes,
  answers,
  tags,
}) => {
  return (
    <Card className="mb-4 overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex flex-col gap-1">
          <Link
            to={`/question/${id}`}
            className="text-lg font-semibold text-farm-green hover:underline"
          >
            {title}
          </Link>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-farm-wheat text-farm-earth"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="line-clamp-2 text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/30 p-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <span>·</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-muted-foreground"
          >
            <ArrowUpCircle className="h-4 w-4" />
            <span>{votes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-muted-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{answers}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
