export default {
    User: [{
            user_id: 1,
            name: "철수",
            created_at: "2021-12-11"
        },
        {
            user_id: 2,
            name: "영희",
            created_at: "2021-12-12"
        },
        {
            user_id: 3,
            name: "구라",
            created_at: "2021-12-13"
        },
        {
            user_id: 4,
            name: "사라",
            created_at: "2021-12-14"
        },
        {
            user_id: 5,
            name: "조우",
            created_at: "2021-12-15"
        }
    ],
    Content: [{
            content_id: 1,
            user_id: 1,
            title: "게시판 제목 1",
            context: "게시판 내용1",
            created_at: "2021-12-11",
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: "게시판 제목 2",
            context: "게시판 내용2",
            created_at: "2021-12-12",
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: "게시판 제목 3",
            context: "게시판 내용3",
            created_at: "2021-12-13",
            updated_at: null
        },
        {
            content_id: 4,
            user_id: 4,
            title: "게시판 제목 4",
            context: "게시판 내용4",
            created_at: "2021-12-14",
            updated_at: null
        },
        {
            content_id: 5,
            user_id: 5,
            title: "게시판 제목 5",
            context: "게시판 내용5",
            created_at: "2021-12-15",
            updated_at: null
        }
    ],
    Comment: [{
            comment_id: 1,
            content_id: 2,
            user_id: 1,
            context: "안녕하세요1",
            created_at: "2021-12-15",
            updated_at: null
        },
        {
            comment_id: 2,
            content_id: 1,
            user_id: 1,
            context: "안녕하세요2",
            created_at: "2021-12-12",
            updated_at: null
        },
        {
            comment_id: 3,
            content_id: 3,
            user_id: 3,
            context: "안녕하세요3",
            created_at: "2021-12-15",
            updated_at: null
        },
        {
            comment_id: 4,
            content_id: 3,
            user_id: 1,
            context: "안녕하세요4",
            created_at: "2021-12-19",
            updated_at: null
        },
        {
            comment_id: 5,
            content_id: 3,
            user_id: 2,
            context: "안녕하세요6",
            created_at: "2021-12-20",
            updated_at: null
        }
    ],
    SubComment: [{
            subcomment_id: 1,
            comment_id: 3,
            user_id: 3,
            context: "서브 댓글 1",
            created_at: "2021-12-15",
            updated_at: null
        },
        {
            subcomment_id: 2,
            comment_id: 3,
            user_id: 1,
            context: "서브 댓글 2",
            created_at: "2021-12-16",
            updated_at: null
        }
    ]
};