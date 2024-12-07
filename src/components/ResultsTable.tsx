import React from 'react';

// Define the Result interface
interface Result {
  bidDate: string;
  propertyName: string;
  propertyManagement: string;
  city: string;
  zipCode: string;
  frequency: string;
  areaSize: number | null;
  lotState: string;
  congestionFactor: string;
  discount: number;
  hourlyRate: number | null;
  jobTime: number | null;
  estimatedCost: number | null;
  totalBidAmount: number | null;
}

// Define the ResultsTableProps interface
interface ResultsTableProps {
  results: Result[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div>
      {results.length === 0 ? (
        <p>No results available.</p>
      ) : (
        results.map((result, index) => (
          <table
            key={index}
            style={{
              width: '100%',
              marginBottom: '20px',
              borderCollapse: 'collapse',
              border: '1px solid #ddd',
            }}
          >
            <thead>
            <tr>
              <th
                colSpan={2}
                style={{
                  textAlign: 'left',
                  padding: '10px',
                  backgroundColor: '#f2f2f2',
                }}
              >
                Result {index + 1}
              </th>
            </tr>
            </thead>
            <tbody>
            {/* Date of Bid */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Date of Bid</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.bidDate || 'N/A'}
              </td>
            </tr>

            {/* Property Name */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Property Name</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.propertyName || 'N/A'}
              </td>
            </tr>

            {/* Property Management */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Property Management</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.propertyManagement || 'N/A'}
              </td>
            </tr>

            {/* City */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>City</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.city || 'N/A'}
              </td>
            </tr>

            {/* Zip Code */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Zip Code</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.zipCode || 'N/A'}
              </td>
            </tr>

            {/* Frequency */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Frequency</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.frequency || 'N/A'}
              </td>
            </tr>

            {/* Area Size */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Area Size (Acres)</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.areaSize !== null && result.areaSize !== undefined
                  ? result.areaSize.toFixed(2)
                  : 'N/A'}
              </td>
            </tr>

            {/* State of Lot */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>State of Lot</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.lotState || 'N/A'}
              </td>
            </tr>

            {/* Congestion Factor */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Congestion Factor</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.congestionFactor || 'N/A'}
              </td>
            </tr>

            {/* Discount */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Discount (%)</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.discount}%
              </td>
            </tr>

            {/* Hourly Rate */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Hourly Rate ($)</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.hourlyRate !== null && result.hourlyRate !== undefined
                  ? result.hourlyRate.toFixed(2)
                  : 'N/A'}
              </td>
            </tr>

            {/* Job Time */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Job Time (minutes)</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.jobTime !== null && result.jobTime !== undefined
                  ? result.jobTime
                  : 'N/A'}
              </td>
            </tr>

            {/* Estimated Cost */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Estimated Cost ($)</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.estimatedCost !== null && result.estimatedCost !== undefined
                  ? result.estimatedCost.toFixed(2)
                  : 'N/A'}
              </td>
            </tr>

            {/* Total Bid Amount */}
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <strong>Total Bid Amount ($)</strong>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {result.totalBidAmount !== null && result.totalBidAmount !== undefined
                  ? result.totalBidAmount.toFixed(2)
                  : 'N/A'}
              </td>
            </tr>
            </tbody>
          </table>
        ))
      )}
    </div>
  );
};

export default ResultsTable;
