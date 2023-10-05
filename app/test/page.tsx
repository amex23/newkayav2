import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: notionSecret });

const fetchFromNotion = async () => {
  const query = await notion.databases.query({
    database_id: notionDatabaseId || "",
  });

  const { results } = query;

  return results || [];
};

export default async function TestPage() {
		  const rows = await fetchFromNotion();
		  console.log("rows on front end", rows);

		const [row] = rows; // first item sa array
		const { properties }  = (row || {}) as any;
		const headers = Object.keys(properties); 
	   	console.log(properties);

	  return (
		<main className="w-full flex flex-col">
			 <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
		      <thead>
		        <tr>
		          {headers.map((header) => (
		            <th
		              className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
		              key={header}
		            >
		              {header}
		            </th>
		          ))}
		        </tr>
		      </thead>
		      <tbody className="bg-white divide-y divide-gray-300">
		        {rows.map((row: any) => (
		          <tr key={row.id}>
		            {Object.keys(properties).map((property: any, j) => (
		              <td className="px-6 py-4 whitespace-no-wrap" key={j}>
		                {properties[property]?.toString()}
		              </td>
		            ))}
		          </tr>
		        ))}
		      </tbody>
		    </table>
		   
		</main>
	  );
}

		