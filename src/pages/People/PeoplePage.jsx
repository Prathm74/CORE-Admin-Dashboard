import { useEffect, useState } from "react";
import styles from "./PeoplePage.module.css";
import peopleData from "../../data/peopleData";
import PersonCard from "../../components/people/PersonCard";
import SkeletonCard from "../../components/people/SkeletonCard";
import PeopleActions from "../../components/people/PeopleActions";
import Pagination from "../../components/people/Pagination";

export default function PeoplePage() {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [page, setPage] = useState(1);

    const perPage = 8;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setPage(1); 
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    let filtered = peopleData.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    filtered.sort((a, b) =>
        sort === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    const start = (page - 1) * perPage;
    const paginated = filtered.slice(
        start,
        start + perPage
    );

    return (
        <>
            <PeopleActions
                search={search}
                setSearch={setSearch}
                sort={sort}
                setSort={setSort}
                data={filtered}
            />

            <div className={styles.grid}>
                {loading
                    ? Array.from({ length: perPage }).map((_, i) => (
                        <SkeletonCard key={i} index={i} />
                    ))
                    : paginated.map((person, index) => (
                        <PersonCard
                            key={person.id}
                            person={person}
                            index={index}
                        />
                    ))}
            </div>

            {!loading && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    total={filtered.length}
                    perPage={perPage}
                />
            )}
        </>
    );
}
