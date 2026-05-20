export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-night-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <p className="text-muted-foreground text-sm animate-pulse">Cargando...</p>
      </div>
    </div>
  );
}
