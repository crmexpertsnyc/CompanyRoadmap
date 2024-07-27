import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const roadmapData = {
  company: [
    {
      year: 2024,
      title: "Strengthen the Core",
      items: [
        "Optimize Operations",
        "Improve Employee Engagement",
        "Hire the Right People to Support Growth and Innovation",
      ],
      benefits: [
        "Increased Efficiency",
        "Higher Employee Satisfaction",
        "Improved Innovation Capabilities",
      ],
    },
    {
      year: 2025,
      title: "Strategic Growth",
      items: [
        "Market Expansion",
        "Diversification",
        "Continue Hiring for Innovation and Growth",
      ],
      benefits: [
        "Increased Market Share",
        "Reduced Business Risk",
        "Enhanced Competitive Position",
      ],
    },
    {
      year: 2026,
      title: "Financial Optimization and Scaling",
      items: ["Cost Management", "Revenue Scaling", "Investment"],
      benefits: [
        "Improved Profit Margins",
        "Sustainable Growth",
        "Increased Shareholder Value",
      ],
    },
    {
      year: 2027,
      title: "Enhance Value and Brand of Company",
      items: ["Brand Building", "Customer Experience", "Value Proposition"],
      benefits: [
        "Stronger Brand Recognition",
        "Increased Customer Loyalty",
        "Higher Perceived Value",
      ],
    },
    {
      year: 2028,
      title: "Prepare for Scale",
      items: [
        "Operational Independence",
        "Leadership Development",
        "Infrastructure Expansion",
      ],
      benefits: [
        "Improved Scalability",
        "Strong Leadership Pipeline",
        "Robust Infrastructure for Growth",
      ],
    },
    {
      year: 2029,
      title: "Prepare for Company Sale or Executive Transition or Go Public",
      items: [
        "Succession Planning",
        "Operational Excellence",
        "Exit Strategy",
        "Evaluate options for company sale, leadership transition, or IPO",
        "Prepare necessary documentation and processes for chosen path",
      ],
      benefits: [
        "Smooth Leadership Transition",
        "Maximized Company Value",
        "Clear Path for Future Growth",
      ],
    },
    {
      year: 2030,
      title: "Sit on the Board, C-Level, or Chair",
      items: ["Board Position", "C-Level Advisor", "Chair Role"],
      benefits: [
        "Strategic Influence",
        "Continued Company Involvement",
        "Personal and Professional Growth",
      ],
    },
  ],
  employee: [
    {
      year: "2024-2025",
      title: "Leadership Development and Succession Planning",
      items: [
        "Develop leadership skills to manage growth and projects",
        "Identify and train successors for key roles",
        "Delegate responsibilities to team members",
        "Focus on strategic oversight rather than day-to-day tasks",
        "Ensure projects can run smoothly without direct intervention",
      ],
      benefits: [
        "Skill Development: Enhance leadership and management capabilities",
        "Career Advancement: Prepare for higher-level roles",
        "Personal Growth: Develop adaptability and confidence in leadership",
        "Network Expansion: Build relationships across the organization",
      ],
    },
    {
      year: "2026-2027",
      title: "Strategic Leadership and Cross-Departmental Experience",
      items: [
        "Lead strategic initiatives with significant company impact",
        "Reduce direct work involvement to 10-15% of overall operations",
        "Take on short-term leadership roles in various departments:",
        "• Operations: Optimize processes and improve efficiency",
        "• Sales: Develop strategies to increase revenue and market share",
        "• Marketing: Create and implement brand-building campaigns",
        "• HR: Enhance talent acquisition and employee development programs",
        "• Tech: Drive technological innovation and digital transformation",
        "• Finance: Oversee financial planning and risk management",
        "Gain comprehensive understanding of overall company operations",
        "Prepare for future executive role through diverse experiences",
        "Become a shareholder and earn shares in the company",
      ],
      benefits: [
        "Expertise: Gain diverse skills across multiple departments",
        "Strategic Influence: Shape company direction and growth",
        "Financial Growth: Become a shareholder in the company",
        "Intellectual Stimulation: Face new challenges and learn continuously",
        "Career Resilience: Develop a comprehensive skill set",
      ],
    },
    {
      year: "2028-2030",
      title: "Executive Preparation and Implementation",
      items: [
        "Prepare for executive-level roles through specialized training",
        "Identify and groom potential executive team members",
        "Implement succession plans for key roles",
        "Take on C-Level responsibilities",
        "Drive company-wide strategic initiatives",
      ],
      benefits: [
        "Career Advancement: Transition into executive-level roles",
        "Strategic Influence: Play key role in shaping company's future",
        "Legacy Building: Mentor next generation of company leaders",
        "Financial Growth: Increase earning potential through career advancement",
        "Network Expansion: Represent company in industry forums and events",
        "Wealth Creation: Potential to sell vested shares for significant profit if company sells or goes public",
        "Financial Milestone: Opportunity to become a millionaire while working for the company",
      ],
    },
    {
      year: "2031-2034",
      title: "Strategic Oversight and Passive Income",
      items: [
        "Transition to overseeing and making decisions on company direction",
        "Step back from working directly in the company",
        "Earn income based on achievement of key performance indicators (KPIs)",
        "Benefit from profit-sharing as a major shareholder",
        "Enter 'making money in your sleep' phase as a shareholder",
        "Enjoy the freedom to pursue other interests while benefiting from CRM Experts' success",
        "Reap the rewards of years of hard work and strategic planning",
        "Consider taking on a Board Chair position",
      ],
      benefits: [
        "Financial Security: Achieve passive income and long-term stability",
        "Work-Life Balance: Freedom to pursue other interests",
        "Strategic Influence: Contribute to long-term vision and sustainability",
        "Legacy: Leave lasting impact on organization's culture and direction",
        "Personal Fulfillment: Enjoy the fruits of years of hard work and planning",
        "Career Pinnacle: Potential to become Board Chair",
        "Continued Engagement: Option to sit on the Board and guide company strategy",
      ],
    },
  ],
};

const ProgressBar = ({ current, total }) => (
  <div className="progress-bar">
    <div
      className="progress-bar-inner"
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
  </div>
);

const RoadmapItem = ({ year, title, items, benefits, isOpen, toggleOpen }) => {
  return (
    <div className="roadmap-item">
      <button className="roadmap-header" onClick={toggleOpen}>
        <span className="font-semibold text-lg text-gray-800">
          {year} - {title}
        </span>
        {isOpen ? (
          <ChevronUp size={24} className="text-blue-600" />
        ) : (
          <ChevronDown size={24} className="text-purple-600" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="roadmap-content"
        >
          <h4 className="font-semibold mb-2 text-blue-700">Key Actions:</h4>
          <ul className="space-y-2 mb-4 key-actions">
            {items.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
          {benefits && (
            <>
              <h4 className="font-semibold mb-2 text-purple-700">Benefits:</h4>
              <ul className="space-y-2 benefits">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

const RoadmapSection = ({ title, data }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (year) => {
    setOpenItems((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        {title} Roadmap
      </h2>
      <ProgressBar
        current={Object.values(openItems).filter(Boolean).length}
        total={data.length}
      />
      {data.map((item) => (
        <RoadmapItem
          key={item.year}
          {...item}
          isOpen={openItems[item.year]}
          toggleOpen={() => toggleItem(item.year)}
        />
      ))}
    </div>
  );
};

const InteractiveRoadmap = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen d-flex flex-column justify-content-center p-4">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Roadmap for Company and Employee Development
          </h1>
          <RoadmapSection title="Company" data={roadmapData.company} />
          <RoadmapSection title="Employee" data={roadmapData.employee} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveRoadmap;
