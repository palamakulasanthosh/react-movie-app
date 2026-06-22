import React from 'react'

const Header = ({ filter, setfilter, sortyear, setsortyear, dark, setdark }) => {
  return (
    <div>
      <div
        className={
          dark
            ? 'bg-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4 p-4'
            : 'bg-red-300 flex flex-col sm:flex-row items-center justify-between gap-4 p-4'
        }
      >
        <div className="font-bold text-2xl sm:text-4xl text-white">
          Movies Website
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            className={
              dark
                ? 'w-full sm:w-72 bg-black text-white outline-none rounded-2xl px-4 py-2'
                : 'w-full sm:w-72 bg-white text-black outline-none rounded-2xl px-4 py-2'
            }
            value={filter}
            onChange={(e) => setfilter(e.target.value)}
            type="search"
            placeholder="Search movie name"
          />

          <select
            value={sortyear || ''}
            onChange={(e) => setsortyear(e.target.value)}
            className={
              dark
                ? 'w-full sm:w-auto bg-black text-white rounded-lg px-3 py-2'
                : 'w-full sm:w-auto bg-white text-black rounded-lg px-3 py-2'
            }
          >
            <option value="">Sort by year</option>
            <option value="asc">Ascending year</option>
            <option value="des">Descending year</option>
          </select>

          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={dark}
              onChange={() => setdark(!dark)}
            />
            Dark
          </label>
        </div>
      </div>
    </div>
  )
}

export default Header