import { FC } from "react";
import { useMovies } from "../../../hooks";

const PaginationDiv: FC = () => {
    const { setPageParams, page, lastPage } = useMovies();

    // useEffect(() => {
    //     searchMulti.getSearchMulti({ page, search }).then((response) =>
    //         setLastPage(response.total_pages));
    // }, [page, search]);

    let active = true;

    let disabledFirts;
    if (page <= 1) disabledFirts = "disabled";

    let disabledLast;
    if (page === lastPage) disabledLast = "disabled";

    const firtsPage = () => {
        setPageParams(1);
        active = false;
    }

    const prevPage = () => {
        if (page <= 1) {
            active = false;
        } else {
            setPageParams(page - 1);
        }
    }

    const nextPage = () => {
        setPageParams(page + 1);
        if (page === lastPage) {
            setPageParams(page);
            active = false;
        }
    }

    const goLastPage = () => {
        setPageParams(lastPage);
        active = false;
    }

    return (

        <div className="Page navigation example pb-2">
            <ul className="pagination justify-content-center">
                <li className={`item-pagination page-item ${disabledFirts}`} >
                    <button className="pagination-link page-link" onClick={firtsPage} disabled={!active}> First </button>
                </li>
                <li className={`page-item ${disabledFirts}`} id="prevPage">
                    <button className="page-link" onClick={prevPage} disabled={!active}> {page - 1} </button>
                </li>
                <li className="page-item active">
                    <button className="page-link"> {page} </button>
                </li>
                <li className={`page-item ${disabledLast}`}>
                    <button className="page-link" onClick={nextPage} disabled={!active}> {page + 1} </button>
                </li>
                <li className={`page-item ${disabledLast}`}>
                    <button className="page-link" onClick={goLastPage} disabled={!active}> Last </button>
                </li>
            </ul>
        </div>
    )

};

export { PaginationDiv } 