if (document.getElementById('datatables')) {
    let dataTable = new simpleDatatables.DataTable("#datatables", {
        searchable: true,
        fixedHeight: false,
        labels: {
            placeholder: "Поиск...",
            perPage: "{select} записей на странице",
            noRows: "Ничего не найдено",
            info: "Показано с {start} по {end} из {rows} записей",
        }
    });


    function adaptPageDropdown(dataTable) {
        const selector = dataTable.wrapper.querySelector(".dataTable-selector")
        selector.parentNode.parentNode.insertBefore(selector, selector.parentNode)
        selector.classList.add("form-select")
    }

    function adaptPagination(dataTable) {
        const paginations = dataTable.wrapper.querySelectorAll(
            "ul.dataTable-pagination-list"
        )

        for (const pagination of paginations) {
            pagination.classList.add(...["pagination", "pagination-primary"])
        }

        const paginationLis = dataTable.wrapper.querySelectorAll(
            "ul.dataTable-pagination-list li"
        )

        for (const paginationLi of paginationLis) {
            paginationLi.classList.add("page-item")
        }

        const paginationLinks = dataTable.wrapper.querySelectorAll(
            "ul.dataTable-pagination-list li a"
        )

        for (const paginationLink of paginationLinks) {
            paginationLink.classList.add("page-link")
        }
    }

    dataTable.on("datatable.init", function () {
        adaptPageDropdown(dataTable)
        adaptPagination(dataTable)
    })

    dataTable.on("datatable.page", adaptPagination)
}
