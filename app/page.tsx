export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🔬 Excalidraw Academic & Scientific Asset Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            By Sayyed Glitch (Jaid Sayyed) | @broexplainsscience
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            High-quality, hand-drawn style visual assets for Excalidraw —  
            built for chemistry, pharmacy, and academic note-taking.  
            <strong>No AI. No shortcuts. Just expertise.</strong>
          </p>
        </header>

        {/* Available Assets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📦 Available Assets
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    Asset
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    🧪 Interactive Periodic Table
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      ✅ Free Sample
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href="/periodic-table/library.excalidrawlib"
                      download
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    🔬 Chemistry Lab Glassware
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      🔜 Coming Soon
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">—</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    🏭 Advanced Lab Instruments (HPLC, GC, IR, UV-Vis & more)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      🔜 Coming Soon
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">—</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    💊 Pharmacy Symbols & Drug Structures
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      🔜 Coming Soon
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">—</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    📋 Lab Report & Data Templates
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      🔜 Coming Soon
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12 bg-blue-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📥 How to Use Any Asset
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Click the download link in the table above</li>
            <li>Open <a href="https://excalidraw.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Excalidraw</a> → Library icon → Import</li>
            <li>Done — all elements are ready to drag onto your canvas!</li>
          </ol>
        </section>

        {/* Premium Pack */}
        <section className="mb-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            🎁 Free Sample: Interactive Periodic Table
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The complete periodic table as individual draggable element blocks.  
            Each block includes: Atomic Number · Symbol · Full Name · Memory Shortcode.
          </p>
          <a
            href="https://broexplainscience.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            ➡️ Full Premium Pack on Gumroad
          </a>
        </section>

        {/* Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ☕ Support This Project
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I recently left my role in the <strong>Quality Management department of a large pharmaceutical generic manufacturing company</strong> to pursue my <strong>Master&apos;s in Pharmaceutical Analysis</strong> — and to build something I&apos;m truly passionate about.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Every asset here is made from real domain expertise. No AI generation. No compromise on quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://ko-fi.com/broexplainsscience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                ☕ Support on Ko-fi
              </a>
              <a
                href="https://paypal.me/Jaid105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                💙 Support on PayPal
              </a>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📧 Connect/Contact
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.instagram.com/bro_explains_science/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 dark:text-pink-400">
              📸 Instagram
            </a>
            <a href="https://broexplainscience.gumroad.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 dark:text-purple-400">
              🛒 Gumroad
            </a>
            <a href="https://x.com/BroExplains_Sci" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              ❎ Twitter
            </a>
            <a href="https://github.com/sayyed-glitch" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400">
              💻 GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            Copyright © 2026 Jaid Sayyed (Sayyed Glitch). All Rights Reserved.
          </p>
          <p className="text-sm">
            Protected under the Indian Copyright Act 1957 and the Berne Convention (181 countries worldwide).
          </p>
        </footer>
      </div>
    </div>
  );
}
