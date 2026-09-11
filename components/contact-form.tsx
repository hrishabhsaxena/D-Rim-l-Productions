'use client'

import { useState, type FormEvent } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const projectTypes = [
  'Film / Series Score',
  'Stage Production',
  'Concert Work',
  'Arrangement',
  'Mixing / Mastering',
  'Something else',
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [selectedType, setSelectedType] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1400)
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-card/60 px-8 py-20 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="size-7" />
        </span>
        <h3 className="mt-6 text-2xl">Your message is on its way.</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thank you for reaching out. We&apos;ll be in touch within two business days to start the
          conversation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@studio.com"
          />
        </Field>
      </div>

      <div>
        <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Project Type
        </span>
        <div className="flex flex-wrap gap-2.5">
          {projectTypes.map((type) => {
            const active = selectedType === type
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(active ? '' : type)}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all duration-300',
                  active
                    ? 'border-gold bg-gold text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground',
                )}
              >
                {type}
              </button>
            )
          })}
        </div>
        <input type="hidden" name="projectType" value={selectedType} />
      </div>

      <Field label="Tell us about your project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input resize-none"
          placeholder="The story, the format, timelines, references you love..."
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:brightness-110 disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
