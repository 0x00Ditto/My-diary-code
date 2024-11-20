export default function Table_1() {
  return (
    <div className="flex justify-center">
      <table className="bg-black/80 text-white rounded mb-10 w-[600px] ">
        <thead>
          <tr className="">
            <th className="px-2 py-4  rounded   ">Pays</th>
            <th className="px-2 py-4">Statistique 1	</th>
            <th className="px-2 py-4">Statistique 2	</th>
            <th className="px-2 py-4">Statistique 3</th>
            <th className="px-2 py-4">Statistique 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="px-2 py-4">France</th>
            <th className="px-2 py-4">65%</th>
            <th className="px-2 py-4">1200</th>
            <th className="px-2 py-4">450</th>
            <th className="px-2 py-4">89%</th>
          </tr>
          <tr>
            <th className="px-2 py-4">United States</th>
            <th className="px-2 py-4">78%</th>
            <th className="px-2 py-4">3200</th>
            <th className="px-2 py-4">670</th>
            <th className="px-2 py-8">92%</th>
          </tr>
          <tr>
            <th className="px-2 py-4">United Kingdom</th>
            <th className="px-2 py-4">70%</th>
            <th className="px-2 py-4">1500</th>
            <th className="px-2 py-4">490</th>
            <th className="px-2 py-4">88%</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
