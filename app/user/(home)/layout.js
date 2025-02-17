'use client'
import AuthCheck from '../../components/AuthCheck'

export default function HomeLayout({ sidebar, main }) {
    return (
        <AuthCheck>
            <div style={{ display: 'flex', height: '100vh' }}>
                {/* 侧边栏 */}
                <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
                    {sidebar} {/* 渲染 @sidebar 目录的内容 */}
                </aside>

                {/* 主内容区 */}
                <main style={{ flex: 1, padding: '20px' }}>
                    {main} {/* 渲染 @main 目录的内容 */}
                </main>
            </div>
        </AuthCheck>
    );
}