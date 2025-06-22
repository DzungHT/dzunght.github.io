import type { PostInfo } from "./type/PostInfo.type";


export const posts: PostInfo[] = [
    {
        slug: 'first-post',
        title: 'Bài viết đầu tiên',
        date: '2025-06-19',
        description: 'Đây là bài blog đầu tiên',
        thumnailUrl: '/posts/imgs/b-3.png'
    },
    {
        slug: 'second-post',
        title: 'Bài viết thứ hai',
        date: '2025-06-20',
        description: 'Một thực tế đã được chứng minh từ lâu là người đọc sẽ bị phân tâm bởi nội dung dễ đọc của một trang khi nhìn vào bố cục của nó.',
        thumnailUrl: '/posts/imgs/b-2.png'
    },
];