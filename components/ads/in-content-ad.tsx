import { AdBanner } from "./ad-banner";

export function InContentAd() {
  return (
    <div className="my-8 flex justify-center">
      <div className="text-center">
        <div className="text-xs text-muted-foreground mb-1">Advertisement</div>
        <AdBanner size="300x250" slotId={1} />
      </div>
    </div>
  );
}
