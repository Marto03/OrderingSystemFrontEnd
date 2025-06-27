export const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleString('bg-BG');

export const isValidAmount = (value) =>
    !isNaN(parseFloat(value.replace(',', '.')));
