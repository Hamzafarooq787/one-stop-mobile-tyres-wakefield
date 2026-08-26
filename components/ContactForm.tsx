"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-glass-bg backdrop-blur-md rounded-xl p-md md:p-lg glass-panel shadow-lg flex flex-col items-center text-center gap-4 py-xl">
        <Icon name="check_circle" className="text-primary w-12 h-12" />
        <h2 className="font-headline text-headline-md text-on-surface">
          Request Received
        </h2>
        <p className="text-on-surface-variant max-w-[28rem]">
          Thanks for reaching out. A member of our dispatch team will contact
          you shortly. For immediate emergencies, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-glass-bg backdrop-blur-md rounded-xl p-md md:p-lg glass-panel shadow-lg">
      <h2 className="font-headline text-headline-md text-on-surface mb-lg flex items-center gap-sm border-b border-border-subtle pb-sm">
        <Icon name="bolt" className="text-primary w-6 h-6" />
        Dispatch a Technician
      </h2>
      <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label className="text-label-sm text-on-surface-variant" htmlFor="name">
              Full Name
            </label>
            <input
              className="rounded-lg p-sm w-full border border-outline-variant bg-surface-container text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="text-label-sm text-on-surface-variant" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="rounded-lg p-sm w-full border border-outline-variant bg-surface-container text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              id="phone"
              name="phone"
              placeholder="07xxx xxxxxx"
              type="tel"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-xs">
          <label className="text-label-sm text-on-surface-variant" htmlFor="service">
            Service Required
          </label>
          <div className="relative">
            <select
              className="appearance-none rounded-lg p-sm w-full border border-outline-variant bg-surface-container text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors pr-10"
              id="service"
              name="service"
              defaultValue="Emergency Tyre Fitting"
            >
              <option>Emergency Tyre Fitting</option>
              <option>Puncture Repair</option>
              <option>Locking Wheel Nut Removal</option>
              <option>Battery Replacement</option>
              <option>Fleet Maintenance</option>
            </select>
            <Icon
              name="expand_more"
              className="absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none w-5 h-5"
            />
          </div>
        </div>

        <div className="flex flex-col gap-xs">
          <label className="text-label-sm text-on-surface-variant" htmlFor="location">
            Current Location (Postcode or Street)
          </label>
          <div className="relative">
            <Icon
              name="my_location"
              className="absolute left-sm top-1/2 -translate-y-1/2 text-primary w-5 h-5"
            />
            <input
              className="rounded-lg p-sm pl-10 w-full border border-outline-variant bg-surface-container text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              id="location"
              name="location"
              placeholder="e.g. WF1 1AA"
              type="text"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-xs">
          <label className="text-label-sm text-on-surface-variant" htmlFor="message">
            Additional Details (Optional)
          </label>
          <textarea
            className="rounded-lg p-sm w-full border border-outline-variant bg-surface-container text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
            id="message"
            name="message"
            placeholder="Tyre size, vehicle make/model, etc."
            rows={3}
          />
        </div>

        <button
          className="mt-sm w-full bg-primary-container text-white py-sm rounded-lg font-headline text-body-lg glow-primary active:scale-[0.98] transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-sm"
          type="submit"
        >
          <Icon name="emergency_share" className="w-5 h-5" />
          Request Immediate Assistance
        </button>
      </form>
    </div>
  );
}
