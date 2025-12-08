/**
 * Сервис для работы с данными комикса
 * В будущем здесь будут реальные API-запросы к бэкенду
 */

/**
 * Получить общее количество страниц комикса
 * @returns {Promise<number>}
 */
export async function getTotalPages() {
    // В будущем: запрос к API
    // const response = await fetch('/api/comic/pages/count');
    // return response.json();
    
    // Мок: возвращаем 50 страниц
    return Promise.resolve(50);
}

/**
 * Получить информацию о странице по индексу
 * @param {number} pageIndex - индекс страницы (начинается с 1)
 * @returns {Promise<{index: number, public: boolean, imageUrl: string}>}
 */
export async function getPageInfo(pageIndex) {
    // В будущем: запрос к API
    // const response = await fetch(`/api/comic/pages/${pageIndex}`);
    // return response.json();
    
    // Мок: генерируем данные
    const isPublic = pageIndex <= 40;
    
    // Мок URL изображения - в реальности будет с бэка
    // Предполагаем, что изображения лежат в /images/comic/page-{index}.png
    const imageUrl = `/images/comic/page-${pageIndex}.png`;
    
    return Promise.resolve({
        index: pageIndex,
        public: isPublic,
        imageUrl: imageUrl
    });
}

/**
 * Получить информацию о всех страницах
 * @returns {Promise<Array<{index: number, public: boolean, imageUrl: string}>>}
 */
export async function getAllPagesInfo() {
    // В будущем: запрос к API
    // const response = await fetch('/api/comic/pages');
    // return response.json();
    
    // Мок: генерируем данные для всех страниц
    const totalPages = await getTotalPages();
    const pages = [];
    
    for (let i = 1; i <= totalPages; i++) {
        const pageInfo = await getPageInfo(i);
        pages.push(pageInfo);
    }
    
    return Promise.resolve(pages);
}
