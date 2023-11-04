export const DataTable = ({ data }) => {
  const state = data?.places;

  return (
    <>
      <div className="border-blue-500 border rounded-md ">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#374151] font-serif  text-white">
              <th className="md:px-4 md:py-2  ">Location</th>
              <th className="md:px-4 md:py-2 ">Country</th>
              <th className="md:px-4 md:py-2 ">State</th>
              <th className="md:px-4 md:py-2 ">Place Name</th>
            </tr>
          </thead>
          {!data || !data.country ? (
            <p className="mx-auto max-w-[200px] text-white font-semibold font-serif">
              There Is No Data Yet{" "}
            </p>
            ) : (
            <tbody>
              <tr className="border-t border-blue-400 text-white">
                <td className="md:px-4 md:py-2  px-2 py-1">
                  {data["post code"]}
                </td>
                <td className="md:px-4 md:py-2 px-2 py-1">{data.country}</td>
                <td className="md:px-4 md:py-2 px-2 py-1">
                  {state && state.length > 0 ? state[0].state : ""}
                </td>
                <td className="md:px-4 md:py-2 px-2 py-1">
                  <ul>
                    {data.places?.map((item, index) => (
                      <li className="text-sm" key={index}>
                        {index + 1}) {item["place name"]}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};
