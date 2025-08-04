function ContentSection({
    id,
    title,
    content,
    stats,
    symptoms,
    study,
    reference,
    image,
    isActive,
    toggleSection,
    advice
}) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <button
                onClick={function () { toggleSection(id); }}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-600 hover:bg-red-900 transition-colors duration-200"
            >
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <span className="text-white text-2xl font-bold">
                    {isActive ? '−' : '+'}
                </span>
            </button>

            {isActive && (
                <div className="p-6">
                    <div className="md:flex gap-6">
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto rounded-lg object-cover shadow-sm"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-gray-700 mb-4">{content}</p>

                            {stats && (
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-blue-800 mb-2">A legfrissebb adatok szerint:</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                        {stats.map(function (stat, index) {
                                            return <li key={index}>{stat}</li>;
                                        })}
                                    </ul>
                                </div>
                            )}

                            {symptoms && (
                                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-purple-800 mb-2">Ide tartozhat:</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                        {symptoms.map(function (symptom, index) {
                                            return <li key={index}>{symptom}</li>;
                                        })}
                                    </ul>
                                    <p className="mt-3 text-gray-700">
                                        A tudomány mai állása szerint a long COVID elleni legjobb védekezés a megelőzés – azaz a fertőzés, illetve a súlyosabb betegséglefolyás elkerülése, melyben a védőoltásnak meghatározó szerepe van.
                                    </p>
                                    <a
                                        href={reference}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-blue-600 hover:text-blue-800 hover:underline"
                                    >
                                        Tudományos igazolás
                                    </a>
                                </div>
                            )}

                            {advice && (
                                <div>
                                    <p className="text-gray-700 mb-4">{content}</p>
                                    <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-400">
                                        <h3 className="font-semibold text-yellow-800 mb-2">Mit tehet Ön?</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            {advice.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {study && (
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="mb-6">
                                        {content.split('\n').map((para, idx) => (
                                            <p key={idx} className="mb-4 text-gray-800">{para}</p>
                                        ))}
                                    </div>
                                    <a
                                        href={reference}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-blue-600 hover:text-blue-800 hover:underline"
                                    >
                                        Forrás
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContentSection;


