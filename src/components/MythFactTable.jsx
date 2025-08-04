function MythFactTable() {
  const mythFactsData = [
    {
      myth: 'A COVID–19 vakcinák nem biztonságosak.',
      fact: 'Minden vakcinát – így a COVID–19 elleni vakcinákat is, szigorú biztonságossági és hatékonysági vizsgálatoknak vetnek alá. 2022 márciusáig az Európai Unióban több mint 866 millió adag COVID–19 elleni vakcinát adtak be.'
    },
    {
      myth: 'A COVID–19 vakcinák nem hatékonyak.',
      fact: 'Az EU-ban engedélyezett COVID–19 vakcinák rendkívül hatékonyak a súlyos megbetegedések, a kórházi kezelések és a halálesetek megelőzésében.'
    },
    {
      myth: 'A COVID–19 vakcinák veszélyes összetevőket tartalmaznak.',
      fact: 'A vakcinák összetevői között olyan anyagok is megtalálhatók, amelyek más élelmiszerekben is jelen vannak – például zsírok, cukrok és sók. Nem tartalmaznak tartósítószereket, szöveteket (például abortált magzati sejteket), antibiotikumokat, élelmiszerfehérjéket, gyógyszereket, latexet vagy fémeket.'
    },
    {
      myth: 'A COVID–19 vakcinák különböző variánsok kialakulását okozzák.',
      fact: 'A COVID–19 elleni vakcinák nem okozzák új variánsok kialakulását. Épp ellenkezőleg: segítenek megakadályozni a vírus terjedését és mutációját.'
    },
    {
      myth: 'A COVID–19 vakcinák mikrocsipeket tartalmaznak.',
      fact: 'A vakcinák nem tartalmaznak mikrocsipeket. Céljuk a betegségek elleni védelem, nem pedig a személyek nyomon követése.'
    },
    {
      myth: 'A COVID–19 vakcinák megváltoztatják az ember DNS-ét.',
      fact: 'A vakcinák utasításokat adnak a sejteknek, amelyek így képesek védekezni a COVID–19 vírus ellen. Az immunválasz kialakulása után a szervezet lebontja és eltávolítja a vakcina összetevőit, ahogy minden olyan információt is, amelyre már nincs szükség.'
    },
    {
      myth: 'A COVID–19 vakcinák hatással vannak a termékenységre.',
      fact: 'Nincs tudományos bizonyíték arra, hogy bármely vakcina, beleértve a COVID–19 elleni vakcinákat is, termékenységi problémát okozna nőkben vagy férfiakban.'
    }
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
              TÉVHITEK
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
              TÉNYEK
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mythFactsData.map((item, index) => (
            <tr key={index} className={index % 2 == 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
              <td className="px-4 py-4 whitespace-normal text-sm font-medium text-red-600 sm:px-6">
                <span className="block font-bold md:hidden">Tévhit: </span>
                {item.myth}
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 sm:px-6">
                <span className="block font-bold md:hidden">Tény: </span>
                {item.fact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MythFactTable;