import { AdBanner } from "./ad-banner";

export function LeaderboardAd() {
  return (
    <div className="my-6 flex justify-center">
      <div className="text-center">
        <div className="text-xs text-muted-foreground mb-1">Advertisement</div>
        <AdBanner size="728x90" slotId={3} />
      </div>
    </div>
  );
}
