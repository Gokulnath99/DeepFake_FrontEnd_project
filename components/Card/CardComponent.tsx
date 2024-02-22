import { LeadershipTeamData, TechnicalTeamData } from "./CardList";
import { HoverEffect } from "../ui/card-hover-effect";

export function Card() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl underline">Leadership Team</h2>
        <HoverEffect items={LeadershipTeamData} />
        <h2 className="text-3xl underline">Technical Team</h2>
        <HoverEffect items={TechnicalTeamData} />
    </div>
  );
}
