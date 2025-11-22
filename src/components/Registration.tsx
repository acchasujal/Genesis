import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, User, Building2, Users, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Registration() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    college: 'VESIT',
    teamName: '',
    teamSize: '4',
    phone: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formState.college.trim()) {
      newErrors.college = 'College name is required';
    }

    if (formState.phone && !/^[\d\s\-\+\(\)]+$/.test(formState.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would normally send data to backend
      console.log('Form submitted:', formState);
    }
  };

  return (
    <section
      id="register"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background Sakura Petals - Gentle Animation */}
      {Array.from({ length: 15 }).map((_, i) => {
        const delay = Math.random() * 8;
        const duration = 20 + Math.random() * 10;
        const leftPosition = Math.random() * 100;
        const size = 3 + Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${leftPosition}%`,
              top: '-10px',
              backgroundColor: ['#FFC6D0', '#E99AAA', '#F2B9C3'][i % 3],
              opacity: 0.3 + Math.random() * 0.2,
              willChange: 'transform',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, (Math.random() - 0.5) * 80],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Floating decorative elements - subtle samurai accents */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 rounded-full pointer-events-none hidden lg:block"
        style={{
          borderColor: 'rgba(195, 59, 51, 0.15)',
          boxShadow: '0 0 30px rgba(195, 59, 51, 0.1)',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border-2 rounded-full pointer-events-none hidden lg:block"
        style={{
          borderColor: 'rgba(77, 139, 134, 0.15)',
          boxShadow: '0 0 30px rgba(77, 139, 134, 0.1)',
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Main Registration Card */}
      <motion.div
        className="relative max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Card Container with Japanese Washi Paper Texture */}
        <div
          className="relative backdrop-blur-xl p-8 md:p-12 border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 14, 14, 0.92) 0%, rgba(14, 14, 14, 0.85) 100%)',
            borderColor: 'rgba(195, 59, 51, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(195, 59, 51, 0.2), inset 0 1px 0 rgba(250, 247, 242, 0.05)',
            borderRadius: '4px',
            // Subtle paper texture
            backgroundImage: `
              linear-gradient(135deg, rgba(14, 14, 14, 0.92) 0%, rgba(14, 14, 14, 0.85) 100%),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(250, 247, 242, 0.01) 2px, rgba(250, 247, 242, 0.01) 4px)
            `,
          }}
        >
          {/* Top Accent Line - Samurai Inspired */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, transparent, #C33B33 20%, #C33B33 80%, transparent)',
            }}
          />

          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-8 h-8 mx-auto" style={{ color: '#C33B33' }} />
            </motion.div>
            
            <h2
              className="text-3xl md:text-4xl mb-3"
              style={{
                fontFamily: '"Sawarabi Mincho", "Noto Serif JP", serif',
                color: '#FAF7F2',
                textShadow: '0 2px 8px rgba(195, 59, 51, 0.3)',
              }}
            >
              Registration Pass
            </h2>
            
            <p style={{ color: 'rgba(237, 232, 224, 0.7)', fontSize: '0.95rem' }}>
              Secure your spot at GENESIS 2026
            </p>

            {/* Japanese Character Accent */}
            <motion.div
              className="mt-4 text-5xl opacity-10"
              style={{
                fontFamily: '"Sawarabi Mincho", "Noto Serif JP", serif',
                color: '#C33B33',
              }}
              animate={{
                opacity: [0.08, 0.12, 0.08],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              侍
            </motion.div>
          </motion.div>

          {isSubmitted ? (
            // Success State
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              >
                <CheckCircle2 className="w-20 h-20 mx-auto mb-6" style={{ color: '#4D8B86' }} />
              </motion.div>
              <h3 className="text-2xl mb-4" style={{ color: '#FAF7F2' }}>
                Registration Successful!
              </h3>
              <p style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
                Welcome to GENESIS 2026. Check your email for confirmation details.
              </p>
            </motion.div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 flex items-center gap-2"
                  style={{ color: '#FAF7F2', fontSize: '0.9rem' }}
                >
                  <User className="w-4 h-4" style={{ color: '#C33B33' }} />
                  Full Name <span style={{ color: '#C33B33' }}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(250, 247, 242, 0.05)',
                    border: `2px solid ${
                      errors.fullName
                        ? '#C33B33'
                        : focusedField === 'fullName'
                        ? '#4D8B86'
                        : 'rgba(250, 247, 242, 0.1)'
                    }`,
                    color: '#FAF7F2',
                    borderRadius: '2px',
                    boxShadow: focusedField === 'fullName' ? '0 0 0 3px rgba(77, 139, 134, 0.1)' : 'none',
                  }}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm" style={{ color: '#C33B33' }}>
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 flex items-center gap-2"
                  style={{ color: '#FAF7F2', fontSize: '0.9rem' }}
                >
                  <Mail className="w-4 h-4" style={{ color: '#C33B33' }} />
                  Email Address <span style={{ color: '#C33B33' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(250, 247, 242, 0.05)',
                    border: `2px solid ${
                      errors.email
                        ? '#C33B33'
                        : focusedField === 'email'
                        ? '#4D8B86'
                        : 'rgba(250, 247, 242, 0.1)'
                    }`,
                    color: '#FAF7F2',
                    borderRadius: '2px',
                    boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(77, 139, 134, 0.1)' : 'none',
                  }}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm" style={{ color: '#C33B33' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* College Name */}
              <div>
                <label
                  htmlFor="college"
                  className="block mb-2 flex items-center gap-2"
                  style={{ color: '#FAF7F2', fontSize: '0.9rem' }}
                >
                  <Building2 className="w-4 h-4" style={{ color: '#C33B33' }} />
                  College Name <span style={{ color: '#C33B33' }}>*</span>
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formState.college}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('college')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(250, 247, 242, 0.05)',
                    border: `2px solid ${
                      errors.college
                        ? '#C33B33'
                        : focusedField === 'college'
                        ? '#4D8B86'
                        : 'rgba(250, 247, 242, 0.1)'
                    }`,
                    color: '#FAF7F2',
                    borderRadius: '2px',
                    boxShadow: focusedField === 'college' ? '0 0 0 3px rgba(77, 139, 134, 0.1)' : 'none',
                  }}
                  placeholder="Vivekanand Education Society's Institute of Technology"
                />
                {errors.college && (
                  <p className="mt-1 text-sm" style={{ color: '#C33B33' }}>
                    {errors.college}
                  </p>
                )}
              </div>

              {/* Team Name & Size Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Team Name */}
                <div>
                  <label
                    htmlFor="teamName"
                    className="block mb-2 flex items-center gap-2"
                    style={{ color: '#FAF7F2', fontSize: '0.9rem' }}
                  >
                    <Users className="w-4 h-4" style={{ color: '#C33B33' }} />
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formState.teamName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('teamName')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 outline-none transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(250, 247, 242, 0.05)',
                      border: `2px solid ${
                        focusedField === 'teamName' ? '#4D8B86' : 'rgba(250, 247, 242, 0.1)'
                      }`,
                      color: '#FAF7F2',
                      borderRadius: '2px',
                      boxShadow: focusedField === 'teamName' ? '0 0 0 3px rgba(77, 139, 134, 0.1)' : 'none',
                    }}
                    placeholder="Optional"
                  />
                </div>

                {/* Team Size */}
                <div>
                  <label
                    htmlFor="teamSize"
                    className="block mb-2"
                    style={{ color: '#FAF7F2', fontSize: '0.9rem' }}
                  >
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formState.teamSize}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('teamSize')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 outline-none transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(250, 247, 242, 0.05)',
                      border: `2px solid ${
                        focusedField === 'teamSize' ? '#4D8B86' : 'rgba(250, 247, 242, 0.1)'
                      }`,
                      color: '#FAF7F2',
                      borderRadius: '2px',
                      boxShadow: focusedField === 'teamSize' ? '0 0 0 3px rgba(77, 139, 134, 0.1)' : 'none',
                    }}
                  >
                    <option value="1" style={{ backgroundColor: '#0E0E0E' }}>1 Member</option>
                    <option value="2" style={{ backgroundColor: '#0E0E0E' }}>2 Members</option>
                    <option value="3" style={{ backgroundColor: '#0E0E0E' }}>3 Members</option>
                    <option value="4" style={{ backgroundColor: '#0E0E0E' }}>4 Members</option>
                  </select>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 flex items-center gap-2"
                  style={{ color: '#FAF7F2', fontSize: '0.9rem' }}
                >
                  <Phone className="w-4 h-4" style={{ color: '#C33B33' }} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(250, 247, 242, 0.05)',
                    border: `2px solid ${
                      errors.phone
                        ? '#C33B33'
                        : focusedField === 'phone'
                        ? '#4D8B86'
                        : 'rgba(250, 247, 242, 0.1)'
                    }`,
                    color: '#FAF7F2',
                    borderRadius: '2px',
                    boxShadow: focusedField === 'phone' ? '0 0 0 3px rgba(77, 139, 134, 0.1)' : 'none',
                  }}
                  placeholder="+91 XXXXX XXXXX (Optional)"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm" style={{ color: '#C33B33' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'linear-gradient(135deg, #C33B33 0%, #A02D26 100%)',
                  color: '#FAF7F2',
                  border: '1px solid rgba(250, 247, 242, 0.2)',
                  borderRadius: '2px',
                  boxShadow: '0 4px 16px rgba(195, 59, 51, 0.3), 0 2px 8px rgba(0, 0, 0, 0.3)',
                  clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)',
                }}
              >
                {/* Katana Shine Animation on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(250, 247, 242, 0.3) 50%, transparent 100%)',
                    transform: 'translateX(-100%)',
                  }}
                  whileHover={{
                    transform: 'translateX(100%)',
                    transition: { duration: 0.6, ease: 'easeInOut' },
                  }}
                />
                <span className="relative z-10">Register Now</span>
              </motion.button>
            </form>
          )}

          {/* Bottom Accent Line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, transparent, #4D8B86 20%, #4D8B86 80%, transparent)',
            }}
          />
        </div>

        {/* Contact Information */}
        {!isSubmitted && (
          <motion.div
            className="mt-12 text-center space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3
                className="text-xl mb-4"
                style={{
                  color: '#4D8B86',
                  fontFamily: '"Sawarabi Mincho", serif',
                }}
              >
                Need Help?
              </h3>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                { name: 'Anish Tawade', phone: '+91 9326597580' },
                { name: 'Varun Rahatgaonkar', phone: '+91 9372148550' },
                { name: 'Eesha Chavan', phone: '+91 9653360204' },
                { name: 'Pranav Titambe', phone: '+91 9828871911' },
              ].map((contact, index) => (
                <motion.div
                  key={contact.name}
                  className="px-4 py-3 backdrop-blur-sm border"
                  style={{
                    backgroundColor: 'rgba(14, 14, 14, 0.5)',
                    borderColor: 'rgba(250, 247, 242, 0.1)',
                    borderRadius: '2px',
                    color: 'rgba(237, 232, 224, 0.8)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    borderColor: 'rgba(195, 59, 51, 0.3)',
                    backgroundColor: 'rgba(14, 14, 14, 0.7)',
                  }}
                >
                  <div style={{ color: '#FAF7F2' }}>{contact.name}</div>
                  <div className="text-xs mt-1" style={{ color: '#4D8B86' }}>
                    {contact.phone}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email & Instagram */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="mailto:questit@ves.ac.in"
                className="px-6 py-2 backdrop-blur-sm border transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(14, 14, 14, 0.5)',
                  borderColor: 'rgba(250, 247, 242, 0.1)',
                  color: 'rgba(237, 232, 224, 0.8)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(77, 139, 134, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(14, 14, 14, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250, 247, 242, 0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(14, 14, 14, 0.5)';
                }}
              >
                questit@ves.ac.in
              </a>
              
              <a
                href="https://instagram.com/questit_cell"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 backdrop-blur-sm border transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(14, 14, 14, 0.5)',
                  borderColor: 'rgba(250, 247, 242, 0.1)',
                  color: 'rgba(237, 232, 224, 0.8)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(77, 139, 134, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(14, 14, 14, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250, 247, 242, 0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(14, 14, 14, 0.5)';
                }}
              >
                @questit_cell
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
