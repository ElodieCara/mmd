

export default function distributeCards(cards, columnCount) {
    const columns = Array.from({ length: columnCount }, () => []);
    cards.forEach((card, index) => {
        columns[index % columnCount].push(card);
    });
    return columns;
}