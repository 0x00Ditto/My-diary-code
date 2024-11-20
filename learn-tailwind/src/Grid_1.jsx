export default function Grid_1() {
  return (
    <div className="grid grid-cols-6 gap-4 mb-10">
      <div className="col-start-2 col-span-4 bg-slate-600">01</div>
      <div className="col-start-1 col-end-3 bg-slate-600">02</div>
      <div className="col-end-7 col-span-2 bg-slate-600">03</div>
      <div className="col-start-1 col-end-7 bg-slate-600">04</div>
    </div>
  );
}
