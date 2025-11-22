import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { TeamMember, SocialLink } from '../types';

interface MemberCardProps {
  member: TeamMember;
}

const SocialIcon = ({ platform }: { platform: SocialLink['platform'] }) => {
  switch (platform) {
    case 'github': return <Github className="h-5 w-5" />;
    case 'linkedin': return <Linkedin className="h-5 w-5" />;
    case 'twitter': return <Twitter className="h-5 w-5" />;
    case 'email': return <Mail className="h-5 w-5" />;
    default: return null;
  }
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur transition-opacity duration-300 group-hover:opacity-70" />
          <img 
            src={member.imageUrl} 
            alt={member.name}
            className="relative h-32 w-32 rounded-full object-cover border-2 border-slate-800 shadow-xl"
          />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-indigo-400 font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
        
        <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {member.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {member.skills.map((skill) => (
            <span key={skill} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800 w-full justify-center">
          {member.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
              aria-label={`${member.name}'s ${social.platform}`}
            >
              <SocialIcon platform={social.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;