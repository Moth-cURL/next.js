export default function AboutLayout({ children, model }) {
    return (
        <div className="relative min-h-screen">
            {/* 主要内容区域 */}
            <div className="container mx-auto px-4 py-8">
                {children}
            </div>

            {/* 模态框层 */}
            {model && (
                <div className="fixed inset-0 z-50">
                    {/* 遮罩层 */}
                    <div className="absolute inset-0 bg-black/50" />
                    {/* 模态框内容 */}
                    <div className="relative flex items-center justify-center min-h-screen">
                        {model}
                    </div>
                </div>
            )}
        </div>
    )
} 