export default function useSearch(list, value) {
    const res = list.filter(
        (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) || item.id.toLowerCase().includes(value.toLowerCase())
    );

    return [res]
}