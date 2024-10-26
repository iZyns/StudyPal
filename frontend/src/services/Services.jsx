import axios from 'axios';

export const generateNotes = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('/api/generate-notes', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
