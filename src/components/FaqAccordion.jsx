import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { commonFaqs } from '../data/gymData';
import './FaqAccordion.css';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(commonFaqs[0].id);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-accordion-wrap">
      {commonFaqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
            <button
              className="faq-question-btn"
              onClick={() => toggleItem(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="faq-question-text">{faq.question}</span>
              <div className="faq-chevron-box">
                <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
              </div>
            </button>
            <div
              id={`faq-answer-${faq.id}`}
              className="faq-answer-pane"
              hidden={!isOpen}
            >
              <p className="faq-answer-text">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
