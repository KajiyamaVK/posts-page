export function displayDate(date: Date) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;
  const twoDays = oneDay * 2;
  const oneMonth = oneDay * 30;
  const twoMonths = oneMonth * 2;

  const datesDiff = now.getTime() - date.getTime();

  const formatDate = () => {
    const day = date.getDate();
    const monthName = date.toLocaleString("pt-BR", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleString("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    });
    return `Publicado em ${day} de ${monthName} de ${year} às ${time}`;
  };

  const returnValue = () => {
    if (datesDiff < oneDay) {
      return formatDate();
    }

    if (datesDiff < twoDays) {
      return "Há um dia atrás";
    }

    if (datesDiff < oneMonth) {
      return `Há ${Math.floor(datesDiff / oneDay)} dias atrás`;
    }

    if (datesDiff < twoMonths) {
      return "Um mês atrás";
    }

    return formatDate();
  };

  return returnValue();
}
