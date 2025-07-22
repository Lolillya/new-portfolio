export const Skills = () => {
  return (
    <>
      <section id="section-2" className="py-20">
        <div className="flex flex-col gap-5 w-full">
          <div className="text-center mb-16 border-b border-border pb-5">
            <h2 className="text-6xl font-bold text-text-heading mb-4">Skills & Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="flex gap-4">
            {/* Frontend */}
            <div className="group py-10 w-full px-14 bg-base-white/40 backdrop-blur-sm rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading">Frontend</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">React.js</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png"
                    alt="React"
                    title="React"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">TypeScript</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png"
                    alt="TypeScript"
                    title="TypeScript"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Tailwind CSS</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png"
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Shadcn/ui</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png"
                    alt="ShadCn UI"
                    title="ShadCn UI"
                  />
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="w-full group py-10 px-14 bg-base-white/40 backdrop-blur-sm rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading">Backend</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">.NET Core</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c%23.png"
                    alt="C#"
                    title="C#"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">MySQL</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png"
                    alt="MySQL"
                    title="MySQL"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">PostgreSQL</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png"
                    alt="PostgreSQL"
                    title="PostgreSQL"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">GraphQL</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png"
                    alt="GraphQL"
                    title="GraphQL"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Node.js</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png"
                    alt="Node.js"
                    title="Node.js"
                  />
                </div>
              </div>
            </div>

            {/* Others */}
            <div className="w-full group py-10 px-14 bg-base-white/40 backdrop-blur-sm rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading">Tools</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Docker</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png"
                    alt="Docker"
                    title="Docker"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">VS Code</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/visual_studio_code.png"
                    alt="Visual Studio Code"
                    title="Visual Studio Code"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Neovim</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/neovim.png"
                    alt="Neovim"
                    title="Neovim"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Postman</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg hover:bg-white/40 transition-colors">
                  <span className="font-medium">Git</span>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png"
                    alt="Git"
                    title="Git"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border bg-base-white/40 backdrop-blur-sm rounded-md shadow-lg p-10 flex flex-col gap-5 hover:shadow-xl transition-all duration-400 hover:-translate-y-2">
            <div className="flex justify-center">
              <span className="text-2xl">Others</span>
            </div>

            <div className="flex justify-center flex-wrap gap-5">
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png"
                alt="GraphQL"
                title="GraphQL"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/trpc.png"
                alt="tRPC"
                title="tRPC"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png"
                alt="Git"
                title="Git"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png"
                alt="GitHub"
                title="GitHub"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/visual_studio_code.png"
                alt="Visual Studio Code"
                title="Visual Studio Code"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png"
                alt="Postman"
                title="Postman"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/neovim.png"
                alt="Neovim"
                title="Neovim"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png"
                alt="HTML"
                title="HTML"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png"
                alt="CSS"
                title="CSS"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png"
                alt="Tailwind CSS"
                title="Tailwind CSS"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/swagger.png"
                alt="Swagger"
                title="Swagger"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png"
                alt="Figma"
                title="Figma"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png"
                alt="ShadCn UI"
                title="ShadCn UI"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/lucide.png"
                alt="Lucide"
                title="Lucide"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png"
                alt="JavaScript"
                title="JavaScript"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png"
                alt="React"
                title="React"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png"
                alt="TypeScript"
                title="TypeScript"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png"
                alt="npm"
                title="npm"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png"
                alt="Node.js"
                title="Node.js"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png"
                alt="Redux"
                title="Redux"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react_query.png"
                alt="React Query"
                title="React Query"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png"
                alt="Next.js"
                title="Next.js"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png"
                alt="Vite"
                title="Vite"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c%23.png"
                alt="C#"
                title="C#"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/_net_core.png"
                alt=".NET Core"
                title=".NET Core"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png"
                alt="React Native"
                title="React Native"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/expo.png"
                alt="Expo"
                title="Expo"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png"
                alt="PostgreSQL"
                title="PostgreSQL"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png"
                alt="MySQL"
                title="MySQL"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png"
                alt="SQLite"
                title="SQLite"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mssql.png"
                alt="MSSQL"
                title="MSSQL"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bash.png"
                alt="bash"
                title="bash"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png"
                alt="Docker"
                title="Docker"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/windows.png"
                alt="Windows"
                title="Windows"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ubuntu.png"
                alt="Ubuntu"
                title="Ubuntu"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/solidity.png"
                alt="Solidity"
                title="Solidity"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hardhat.png"
                alt="Hardhat"
                title="Hardhat"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/metamask.png"
                alt="Metamask"
                title="Metamask"
              />
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ethereum.png"
                alt="Ethereum"
                title="Ethereum"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
