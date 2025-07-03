import axios from 'axios';

const SHEET_URL = 'https://api.sheetbest.com/sheets/5283234a-4a73-4b84-bbd1-caeac081e0c5'; 

export const getDegreeData = async () => {
  try {
    const response = await axios.get(SHEET_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return [];
  }
};
