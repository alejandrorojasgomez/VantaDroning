import { useState, type FormEvent, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'

interface FormState {
  nombre: string
  email: string
  telefono: string
  propiedad: string
  mensaje: string
}

const empty: FormState = { nombre: '', email: '', telefono: '', propiedad: 'Conjunto residencial', mensaje: '' }

const propiedades = ['Conjunto residencial', 'Lote o parcelación', 'Bodega o industria', 'Obra o construcción', 'Otro']

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-vanta-accent focus:bg-white/[0.06]'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const set = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (form.nombre.trim().length < 2) e.nombre = 'Cuéntanos tu nombre'
    if (!emailRe.test(form.email)) e.email = 'Revisa el correo'
    if (form.telefono.replace(/\D/g, '').length < 7) e.telefono = 'Revisa el teléfono'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    if (status === 'sending' || !validate()) return
    setStatus('sending')

    // Persist the lead locally and simulate the network round-trip.
    try {
      const leads = JSON.parse(localStorage.getItem('vanta_leads') || '[]')
      leads.push({ ...form, fecha: new Date().toISOString() })
      localStorage.setItem('vanta_leads', JSON.stringify(leads))
    } catch {
      /* storage unavailable — non-blocking */
    }

    await new Promise((r) => setTimeout(r, 1100))
    setStatus('done')
    setForm(empty)
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-[1.5rem] bg-vanta-deep p-6 text-left md:p-8">
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-vanta-accent/20">
              <Check className="h-7 w-7 text-vanta-sky" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-extrabold text-[#E8EEF7]">Mensaje recibido</h3>
            <p className="mt-2 max-w-sm text-sm font-light leading-relaxed text-white/70">
              Un asesor de VANTA te escribe hoy mismo para coordinar la visita a tu propiedad.
              Revisa tu correo y WhatsApp.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-medium text-vanta-sky transition-colors hover:text-white"
            >
              Enviar otra solicitud
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nombre" error={errors.nombre}>
                <input
                  className={inputClass}
                  value={form.nombre}
                  onChange={(e) => set('nombre', e.target.value)}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </Field>
              <Field label="Correo" error={errors.email}>
                <input
                  className={inputClass}
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="tucorreo@email.com"
                  autoComplete="email"
                />
              </Field>
              <Field label="Teléfono" error={errors.telefono}>
                <input
                  className={inputClass}
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => set('telefono', e.target.value)}
                  placeholder="+57 300 000 0000"
                  autoComplete="tel"
                />
              </Field>
              <Field label="Tipo de propiedad">
                <select
                  className={`${inputClass} appearance-none`}
                  value={form.propiedad}
                  onChange={(e) => set('propiedad', e.target.value)}
                >
                  {propiedades.map((p) => (
                    <option key={p} value={p} className="bg-vanta-deep">
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="¿Qué quieres proteger?">
              <textarea
                className={`${inputClass} min-h-[96px] resize-none`}
                value={form.mensaje}
                onChange={(e) => set('mensaje', e.target.value)}
                placeholder="Cuéntanos sobre tu conjunto, lote o bodega"
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-vanta-accent px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-vanta-glow hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Enviando
                </>
              ) : (
                <>
                  Solicitar mi visita
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
            <p className="text-center text-xs font-light text-white/45">
              Respondemos en menos de 24 horas. Tus datos solo se usan para contactarte.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-white/55">{label}</span>
      {children}
      {error && <span className="text-xs font-light text-red-400">{error}</span>}
    </label>
  )
}
