import { AdBanner } from "./ad-banner";

export function SidebarAd() {
  return (
    <div className="my-6">
      <div className="text-xs text-muted-foreground mb-1">Advertisement</div>
      <AdBanner size="300x250" slotId={1} />
    </div>
  );
}
