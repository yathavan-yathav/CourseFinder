import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getDegreeData } from '../services/googleSheets';
import filterDegrees from '../utils/filterDegrees';
import DegreeCard from '../components/DegreeCard';

export default function ResultScreen({ route }) {
  const { stream, zscore, district } = route.params;
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDegreeData();
      const filtered = filterDegrees(data, stream, parseFloat(zscore), district);
      setResults(filtered);
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      {results.length === 0 ? <Text>No matches found.</Text> :
        results.map((deg, i) => <DegreeCard key={i} degree={deg} />)}
    </ScrollView>
  );
}
