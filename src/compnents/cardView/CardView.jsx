import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Dark-themed single-file React component using TailwindCSS
// Default export so it can be previewed in the canvas

export default function VirtualCardApplication() {
  const [cardType, setCardType] = useState('virtual') // 'virtual' or 'physical'
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    limit: 50000,
    deliveryAddress: '',
    design: 'midnight',
    agreeTos: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(null)
  const designs = [
    { id: 'midnight', label: 'Midnight' },
    { id: 'aurora', label: 'Aurora' },
    { id: 'graphite', label: 'Graphite' },
  ]

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
  }

  function validate() {
    if (!form.fullName.trim()) return 'Please enter your full name.'
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return 'Please enter a valid email.'
    if (cardType === 'physical' && !form.deliveryAddress.trim())
      return 'Please provide a delivery address for a physical card.'
    if (!form.agreeTos) return 'You must agree to the terms.'
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const err = validate()
    if (err) return setSuccess({ ok: false, message: err })

    setSubmitting(true)
    setSuccess(null)

    // Simulate async request
    await new Promise((r) => setTimeout(r, 900))

    setSubmitting(false)
    setSuccess({ ok: true, message: `Application submitted for a ${cardType} card.` })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Form */}
        <div className="bg-gray-850/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Apply for a Card</h2>
          <p className="text-sm text-gray-400 mb-6">
            Choose virtual or physical. Fill the form to apply.
          </p>

          <div className="flex gap-3 mb-6">
            <button
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                cardType === 'virtual'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setCardType('virtual')}
              aria-pressed={cardType === 'virtual'}
            >
              Virtual Card
            </button>

            <button
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                cardType === 'physical'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setCardType('physical')}
              aria-pressed={cardType === 'physical'}
            >
              Physical Card
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Full name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Daily spend limit (NGN)</label>
              <input
                name="limit"
                value={form.limit}
                onChange={handleChange}
                type="number"
                min={1000}
                className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {cardType === 'physical' && (
              <div>
                <label className="block text-sm text-gray-300 mb-1">Delivery address</label>
                <textarea
                  name="deliveryAddress"
                  value={form.deliveryAddress}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Street, City, State, Country"
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-300 mb-1">Card design</label>
              <div className="flex gap-2">
                {designs.map((d) => (
                  <label
                    key={d.id}
                    className={`flex items-center gap-2 p-2 rounded-md cursor-pointer border ${form.design === d.id ? 'border-indigo-500' : 'border-gray-800'}`}
                  >
                    <input
                      type="radio"
                      name="design"
                      value={d.id}
                      checked={form.design === d.id}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="w-12 h-8 rounded-md flex items-center justify-center text-xs font-semibold bg-gradient-to-br from-gray-800 to-black">
                      {d.label}
                    </div>
                    <span className="text-sm text-gray-300">{d.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="tos"
                name="agreeTos"
                type="checkbox"
                checked={form.agreeTos}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-700 text-indigo-600 bg-gray-800"
              />
              <label htmlFor="tos" className="text-sm text-gray-400">
                I agree to the{' '}
                <span className="text-indigo-400 underline">terms and conditions</span>
              </label>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold disabled:opacity-60"
              >
                {submitting
                  ? 'Applying...'
                  : `Apply for ${cardType === 'virtual' ? 'Virtual' : 'Physical'} Card`}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    fullName: '',
                    email: '',
                    limit: 50000,
                    deliveryAddress: '',
                    design: 'midnight',
                    agreeTos: false,
                  })
                  setSuccess(null)
                }}
                className="px-4 py-2 bg-gray-800 rounded-md text-sm"
              >
                Reset
              </button>
            </div>

            {success && (
              <div
                className={`mt-4 p-3 rounded-md ${success.ok ? 'bg-green-900/60 border border-green-700' : 'bg-red-900/60 border border-red-700'}`}
              >
                <p className="text-sm">{success.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Right - Live preview */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-800 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Card Preview</h3>
              <span className="text-xs text-gray-500">
                {cardType === 'virtual' ? 'Virtual' : 'Physical'}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md mx-auto"
            >
              <div
                className={`relative rounded-xl p-6 min-h-[160px] ${form.design === 'midnight' ? 'bg-gradient-to-br from-indigo-900 to-gray-900' : form.design === 'aurora' ? 'bg-gradient-to-br from-emerald-700 to-indigo-900' : 'bg-gradient-to-br from-gray-800 to-black'} text-white`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-sm font-semibold opacity-90">Your Bank</div>
                  <div className="text-xs opacity-80">NGN</div>
                </div>

                <div className="mt-6 text-2xl tracking-wide font-mono">
                  **** **** **** {String(form.limit).slice(-4)}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-200">Cardholder</div>
                    <div className="font-medium">{form.fullName || 'Full Name'}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-gray-200">Type</div>
                    <div className="font-medium">
                      {cardType === 'virtual' ? 'Virtual' : 'Physical'}
                    </div>
                  </div>
                </div>

                <div className="absolute right-4 bottom-4 text-xs opacity-80">
                  {form.design.toUpperCase()}
                </div>
              </div>
            </motion.div>

            <div className="mt-4 text-sm text-gray-400">Preview updates live as you type.</div>
          </div>

          <div className="rounded-2xl p-4 bg-gray-850/30 border border-gray-800">
            <h4 className="text-sm font-medium mb-2">Quick summary</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <strong>Type:</strong> {cardType === 'virtual' ? 'Virtual' : 'Physical'}
              </li>
              <li>
                <strong>Holder:</strong> {form.fullName || '—'}
              </li>
              <li>
                <strong>Email:</strong> {form.email || '—'}
              </li>
              <li>
                <strong>Limit:</strong> NGN {form.limit.toLocaleString()}
              </li>
              {cardType === 'physical' && (
                <li>
                  <strong>Delivery:</strong> {form.deliveryAddress || '—'}
                </li>
              )}
            </ul>
          </div>

          <div className="rounded-2xl p-4 bg-gray-850/30 border border-gray-800 text-sm">
            <h4 className="font-medium mb-2">Notes</h4>
            <p className="text-gray-400">
              Virtual cards are instant and usable online. Physical cards take 5–10 business days to
              deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
