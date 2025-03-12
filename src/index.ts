import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// APIのベースURL
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// GETリクエストの例（投稿一覧の取得）
async function getPosts(): Promise<void> {
    try {
        const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
        console.log('投稿一覧:', response.data.slice(0, 3)); // 最初の3件のみ表示
    } catch (error) {
        console.error('エラー:', error);
    }
}

// POSTリクエストの例（新規投稿の作成）
async function createPost(): Promise<void> {
    try {
        const newPost = {
            title: '新しい投稿',
            body: 'これは新しい投稿の本文です。',
            userId: 1
        };
        const response = await axios.post<Post>(`${API_BASE_URL}/posts`, newPost);
        console.log('作成された投稿:', response.data);
    } catch (error) {
        console.error('エラー:', error);
    }
}

// PUTリクエストの例（投稿の更新）
async function updatePost(): Promise<void> {
    try {
        const updatedPost = {
            title: '更新された投稿',
            body: 'これは更新された投稿の本文です。',
            userId: 1
        };
        const response = await axios.put<Post>(`${API_BASE_URL}/posts/1`, updatedPost);
        console.log('更新された投稿:', response.data);
    } catch (error) {
        console.error('エラー:', error);
    }
}

// DELETEリクエストの例（投稿の削除）
async function deletePost(): Promise<void> {
    try {
        const response = await axios.delete(`${API_BASE_URL}/posts/1`);
        console.log('削除のステータス:', response.status);
    } catch (error) {
        console.error('エラー:', error);
    }
}

// すべての操作を実行
async function runAllOperations(): Promise<void> {
    console.log('=== GET リクエスト ===');
    await getPosts();

    console.log('\n=== POST リクエスト ===');
    await createPost();

    console.log('\n=== PUT リクエスト ===');
    await updatePost();

    console.log('\n=== DELETE リクエスト ===');
    await deletePost();
}

// メイン処理の実行
runAllOperations().catch(console.error); 