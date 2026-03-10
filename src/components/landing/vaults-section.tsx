"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// SVG paths from original Figma export (svg-42igu9h15y.ts)
const svgPaths = {
    p12cfb900: "M10.2 9.26664C10.2 8.1 9.5 7.7 8.1 7.53336C7.1 7.4 6.9 7.13136 6.9 6.66664C6.9 6.19992 7.23336 5.9 7.9 5.9C8.5 5.9 8.83336 6.1 9 6.6C9.03336 6.7 9.13336 6.76664 9.23336 6.76664H9.76664C9.9 6.76664 10 6.66664 10 6.53336V6.5C9.86664 5.76664 9.26664 5.2 8.5 5.13336V4.33336C8.5 4.2 8.4 4.1 8.23336 4.06664H7.73336C7.6 4.06664 7.5 4.16664 7.46664 4.33336V5.1C6.46664 5.23336 5.83336 5.9 5.83336 6.73336C5.83336 7.83336 6.5 8.26664 7.9 8.43336C8.83336 8.6 9.13336 8.8 9.13336 9.33336C9.13336 9.86672 8.66664 10.2334 8.03336 10.2334C7.16664 10.2334 6.86664 9.86664 6.76664 9.36664C6.73336 9.23336 6.63336 9.16664 6.53336 9.16664H5.96664C5.83336 9.16664 5.73336 9.26664 5.73336 9.4V9.43336C5.86664 10.2666 6.4 10.8666 7.5 11.0334V11.8334C7.5 11.9666 7.6 12.0666 7.76664 12.1H8.26664C8.4 12.1 8.5 12 8.53336 11.8334V11.0334C9.53336 10.8666 10.2 10.1666 10.2 9.26664Z",
    p214d5900: "M8.98405 8.42923C8.92723 8.43349 8.63365 8.45101 7.97879 8.45101C7.45794 8.45101 7.08813 8.43538 6.95839 8.42923C4.94551 8.34068 3.44307 7.99029 3.44307 7.57076C3.44307 7.15123 4.94551 6.80131 6.95839 6.71134V8.08025C7.09002 8.08972 7.46693 8.11198 7.98779 8.11198C8.61282 8.11198 8.92581 8.08594 8.98216 8.08073V6.71229C10.9908 6.80178 12.4899 7.15218 12.4899 7.57076C12.4899 7.98934 10.9912 8.33973 8.98216 8.42875L8.98405 8.42923ZM8.98405 6.57071V5.34575H11.7872V3.47776H4.15522V5.34575H6.95791V6.57024C4.67987 6.67488 2.96672 7.12614 2.96672 7.66688C2.96672 8.20763 4.67987 8.65841 6.95791 8.76352V12.6889H8.98358V8.7621C11.2564 8.65746 12.9667 8.20668 12.9667 7.66641C12.9667 7.12614 11.2578 6.67536 8.98358 6.57024L8.98405 6.57071Z",
    p1799a840: "M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.4281 14.2565L14.2565 11.4281L12.9113 10.0829C12.3718 11.3535 11.3535 12.3718 10.0829 12.9113L11.4281 14.2565ZM6.28863 13.0528C4.96882 12.606 3.88077 11.6565 3.25232 10.4323L2.16176 11.5229L4.99018 14.3513L6.28863 13.0528ZM3.0887 5.91714C3.62826 4.6465 4.6465 3.62826 5.91714 3.0887L4.82842 2L2 4.82842L3.0887 5.91714ZM10.4323 3.25232L11.5898 2.09476L14.4182 4.92318L13.0528 6.28863C12.606 4.96882 11.6565 3.88077 10.4323 3.25232Z",
    p70cbf00: "M8.74693 10.3739C8.74693 12.1182 7.51114 13.6085 5.25581 14.0007V16H3.33403V14.1394C2.01919 14.0798 0.745147 13.7258 0 13.2958L0.588569 11.0007C1.41226 11.4526 2.569 11.8642 3.84406 11.8642C4.96152 11.8642 5.72656 11.4317 5.72656 10.6478C5.72656 9.90265 5.09923 9.42934 3.64719 8.94023C1.54997 8.23385 0.117306 7.25409 0.117306 5.35322C0.117306 3.62628 1.33372 2.27522 3.43196 1.8621V0H5.35322V1.72542C6.66705 1.78407 7.55092 2.05795 8.19712 2.37213L7.62845 4.58972C7.11995 4.37347 6.21721 3.92107 4.80495 3.92107C3.52988 3.92107 3.11829 4.46986 3.11829 5.01967C3.11829 5.66638 3.80479 6.07746 5.47104 6.70632C7.80644 7.52899 8.74693 8.60769 8.74693 10.3739Z",
    p1b5d2840: "M4.11721 2.87224e-05L4.02723 0.281536V8.44949L4.11721 8.53217L8.23354 6.29105L4.11721 2.87224e-05Z",
    p2fb1aa80: "M4.11644 3.05176e-05L0 6.29105L4.11644 8.53218V4.56768V3.05176e-05Z",
    p7d4c00: "M4.11735 9.25005L4.06664 9.30701V12.2166L4.11735 12.3529L8.2362 7.01008L4.11735 9.25005Z",
    p1ccb9d00: "M4.11644 12.3529V9.25004L0 7.01007L4.11644 12.3529Z",
    p27351572: "M4.1173 8.53214L8.23364 6.29101L4.1173 4.56764V8.53214Z",
    p3a8e3400: "M0 6.291L4.11644 8.53213V4.56763L0 6.291Z",
};

function USDCIcon() {
    return (
        <div className="w-4 h-4 relative -mr-1 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute w-full h-full">
                <circle cx="8" cy="8" r="8" fill="#2775CA" />
                <path d={svgPaths.p12cfb900} fill="white" />
                <path d={svgPaths.p214d5900} fill="white" />
            </svg>
        </div>
    );
}

function USDTIcon() {
    return (
        <div className="w-4 h-4 relative -mr-1 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute w-full h-full">
                <circle cx="8" cy="8" r="8" fill="#50AF95" />
                <path d={svgPaths.p214d5900} fill="white" fillRule="evenodd" clipRule="evenodd" />
            </svg>
        </div>
    );
}

function ETHIcon({ size = 16 }: { size?: number }) {
    return (
        <div style={{ width: size, height: size }} className="relative flex-shrink-0">
            <svg width={size} height={size} viewBox="0 0 8.236 12.353" fill="none" className="absolute w-full h-full">
                <g>
                    <path d={svgPaths.p1b5d2840} fill="#C1CCF8" />
                    <path d={svgPaths.p2fb1aa80} fill="#FDFDFF" />
                    <path d={svgPaths.p7d4c00} fill="#BFCBF7" />
                    <path d={svgPaths.p1ccb9d00} fill="#FCFCFF" />
                    <path d={svgPaths.p27351572} fill="#8197EE" />
                    <path d={svgPaths.p3a8e3400} fill="#C1CBF8" />
                </g>
            </svg>
        </div>
    );
}

function ETHCircleIcon() {
    return (
        <div className="w-4 h-4 relative -mr-1 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16.47 16.47" fill="none" className="absolute w-full h-full">
                <circle cx="8.235" cy="8.235" r="8.235" fill="#627EEA" />
            </svg>
            <div className="absolute left-[23%] top-[11%] w-1/2 h-3/4 overflow-hidden">
                <ETHIcon size={8} />
            </div>
        </div>
    );
}

function ETHXIcon() {
    return (
        <div className="w-4 h-4 relative -mr-1 flex-shrink-0 overflow-hidden">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute w-full h-full">
                <path clipRule="evenodd" d={svgPaths.p1799a840} fill="#060710" fillRule="evenodd" />
            </svg>
            <svg width="8" height="8" viewBox="0 0 4.913 8" fill="none" className="absolute top-1/4 left-[20%] w-[40%] h-1/2">
                <path d="M2.455 0L0 4.074L2.455 5.526V2.958V0Z" fill="#B7B7B7" />
                <path d="M2.455 7.999V5.99L0 4.539L2.455 7.999Z" fill="white" />
                <path d="M2.456 5.99L2.426 6.027V7.911L2.456 7.999L4.913 4.539L2.456 5.99Z" fill="#939090" />
                <path d="M2.455 5.526L4.91 4.075L2.455 2.958V5.526Z" fill="white" />
                <path d="M2.456 2.958L2.426 2.027V0L0 4.075L2.456 2.958Z" fill="#939090" />
                <path d="M0 4.074L2.455 5.526V2.958L0 4.074Z" fill="#B1B1B1" />
            </svg>
        </div>
    );
}

function RSEthIcon() {
    return (
        <div className="w-4 h-4 relative -mr-1 flex-shrink-0">
            <Image src="https://s2.coinmarketcap.com/static/img/coins/200x200/29242.png" alt="rsETH logo" layout="fill" className="rounded-full" />
        </div>
    );
}

function StETHIcon() {
    return (
        <div className="w-4 h-4 relative -mr-1 flex-shrink-0 bg-gray-700 rounded-full flex items-center justify-center border-2 border-white/50">
            <span className="text-white text-[7px] font-bold">stETH</span>
        </div>
    )
}

function StableVaultLogo() {
    return (
        <div className="w-10 h-10 relative flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute inset-0">
                <circle cx="20" cy="20" r="20" fill="#1C1C1C" />
                <path d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32" stroke="#87E2A5" strokeWidth="2" strokeLinecap="round" />
                <circle cx="20" cy="20" r="5" fill="#87E2A5" opacity="0.6" />
                <path d="M16 17L20 13L24 17" stroke="#87E2A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 23L20 27L24 23" stroke="#87E2A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

function HighGainLogo() {
    return (
        <div className="w-10 h-10 relative flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute inset-0">
                <circle cx="20" cy="20" r="19.8" fill="#1C1C1C" stroke="#B4F3DD" strokeWidth="0.37" />
                <line x1="20" y1="1" x2="20" y2="39" stroke="#B4F3DD" strokeWidth="0.33" opacity="0.6" />
                <line x1="1" y1="20" x2="39" y2="20" stroke="#B4F3DD" strokeWidth="0.33" opacity="0.6" />
                <path d="M20 6L34 20L20 34L6 20Z" stroke="#B4F3DD" strokeWidth="0.8" fill="none" />
                <circle cx="20" cy="20" r="4" fill="#B4F3DD" opacity="0.5" />
                <circle cx="20" cy="6" r="1.5" fill="#B4F3DD" />
                <circle cx="20" cy="34" r="1.5" fill="#B4F3DD" />
                <circle cx="6" cy="20" r="1.5" fill="#B4F3DD" />
                <circle cx="34" cy="20" r="1.5" fill="#B4F3DD" />
            </svg>
        </div>
    );
}

function AlwaysGainLogo() {
    return (
        <div className="w-10 h-10 relative rounded-full bg-black flex-shrink-0 overflow-hidden">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute inset-0">
                <circle cx="20" cy="20" r="20" fill="#1A1A1A" />
                <path d="M14 12V28M14 20L22 12M14 20L22 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 14H27C28.1 14 29 14.9 29 16C29 17.1 28.1 18 27 18H24M24 18H27.5C28.9 18 30 19.1 30 20.5C30 21.9 28.9 23 27.5 23H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function CredoraLogo() {
    return <span className="font-semibold text-xs text-neutral-800 tracking-wider">CREDORA</span>
}

function K3Logo() {
    return <span className="font-bold text-xs text-neutral-800 tracking-wide">K3 Finance</span>
}

function NexusMutualLogo() {
    return (
        <div className="flex-shrink-0 flex items-center gap-1">
            <svg width="10" height="12" viewBox="0 0 10 13" fill="none">
                <path d="M5 1L1 3V7C1 9.5 2.8 11.8 5 12.5C7.2 11.8 9 9.5 9 7V3L5 1Z" fill="#09B781" />
                <path d="M3.5 6.5L4.5 7.5L6.5 5.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-semibold text-[9px] text-[#002333]">Nexus Mutual</span>
        </div>
    );
}

function DollarIcon() {
    return (
        <div className="w-4 h-4 overflow-hidden flex-shrink-0 flex items-center justify-center">
            <svg width="8.75" height="16" viewBox="0 0 8.747 16" fill="none">
                <path d={svgPaths.p70cbf00} fill="#1A1A1A" />
            </svg>
        </div>
    );
}

const VaultCard = ({ logo, name, description, tags, tvl, apy, assetIcons, badgeColor, badgeIcon, badgeLabel, extraBadge, footerLogo }: any) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "group relative flex flex-col justify-between p-6 rounded-md w-full h-[360px] transition-colors duration-150 ease-in cursor-pointer",
                hovered ? "bg-gray-200" : "bg-gray-100"
            )}
        >
            <div className={cn("absolute top-0 left-0 flex items-center gap-1 py-2 px-3 rounded-br-md rounded-tl-md", badgeColor)}>
                {badgeIcon}
                <span className="font-semibold text-xs text-neutral-800 tracking-wide whitespace-nowrap">{badgeLabel}</span>
            </div>
            {extraBadge}
            
            <div className="flex-1 flex flex-col justify-between mt-6">
                <div>
                    <div className="flex items-start gap-4">
                        {logo}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-base text-neutral-800">{name}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed mt-1 whitespace-normal">
                                {description}
                            </p>
                        </div>
                    </div>
                     <div className="flex gap-1.5 items-center flex-wrap mt-3">
                         {tags.map((t: string) => (
                             <div key={t} className="bg-blue-100/30 px-1.5 py-0 rounded-[4px]">
                                 <span className="text-[10px] text-slate-600 tracking-wide whitespace-nowrap font-medium">{t}</span>
                             </div>
                         ))}
                     </div>
                </div>

                 <div>
                     <div className="flex items-end justify-between w-full mb-4">
                        <div className="flex flex-col">
                            <span className="text-sm text-neutral-800">{tvl}</span>
                            <span className="text-xs text-slate-500 tracking-tighter">TVL</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-neutral-800">{apy}</span>
                            <span className="text-xs text-slate-500 tracking-tighter">APY</span>
                        </div>
                        <div className="flex flex-col gap-1 justify-center flex-shrink-0">
                            <div className="flex items-center -space-x-1 h-4">
                                {assetIcons}
                            </div>
                            <span className="text-xs text-slate-500 tracking-tighter whitespace-nowrap">Assets accepted</span>
                        </div>
                     </div>
                     <div className="w-full h-px bg-teal-200/50" />
                     <div className="flex items-center gap-2 mt-3">
                         <div className="flex items-center gap-1">
                             <span className="text-xs text-slate-400 whitespace-nowrap">Managed by </span>
                             {footerLogo}
                         </div>
                         <div className="w-px h-4 bg-teal-200/50" />
                         <span className="text-xs text-slate-400 whitespace-nowrap">Live for 6 months</span>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export function VaultsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
                        Our Core Vaults
                    </h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
                        Step into our curated vaults, each designed to optimize your earnings through distinct, actively managed strategies. Whether you seek stable returns or higher gains, find the vault that fits your risk appetite.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <VaultCard
                        logo={<StableVaultLogo />}
                        name="Stable Gain"
                        description="Earn rewards on idle stablecoins through curated DeFi strategies."
                        tags={["Lending", "Basis trading", "Liquidity Provisioning"]}
                        tvl="$7.5 Mn"
                        apy="8.20%"
                        assetIcons={<><USDCIcon /><USDTIcon /></>}
                        badgeColor="bg-teal-500/20"
                        badgeIcon={<DollarIcon />}
                        badgeLabel="Stablecoin"
                        extraBadge={null}
                        footerLogo={<CredoraLogo />}
                    />
                    <VaultCard
                        logo={<HighGainLogo />}
                        name="High Gain"
                        description="Maximum rewards through actively managed strategies."
                        tags={["Lending", "Restaking", "Basis trading"]}
                        tvl="$31.6 Mn"
                        apy="8.22%"
                        assetIcons={<><ETHCircleIcon /><RSEthIcon /><ETHXIcon /><StETHIcon /></>}
                        badgeColor="bg-blue-300/40"
                        badgeIcon={
                            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7.5" stroke="#627EEA" strokeWidth="1" fill="none" />
                                    <path d="M8 2L10.5 7H5.5L8 2Z" fill="#627EEA" />
                                    <path d="M5.5 7.5L8 14L10.5 7.5H5.5Z" fill="#627EEA" opacity="0.6" />
                                </svg>
                            </div>
                        }
                        badgeLabel="Crypto"
                        extraBadge={
                            <div className="absolute top-0 right-0 bg-teal-100/80 flex items-center gap-1 h-8 py-2 px-2 rounded-bl-md rounded-tr-md">
                                <span className="text-[10px] text-neutral-800 tracking-wide whitespace-nowrap">Insured by</span>
                                <NexusMutualLogo />
                            </div>
                        }
                        footerLogo={<CredoraLogo />}
                    />
                    <VaultCard
                        logo={<AlwaysGainLogo />}
                        name="Always Gain"
                        description="Steady, on-chain rewards through curated DeFi strategies."
                        tags={["Lending", "Restaking", "Liquidity Provisioning"]}
                        tvl="$24.6 Mn"
                        apy="6.45%"
                        assetIcons={<><USDCIcon /><USDTIcon /></>}
                        badgeColor="bg-blue-300/40"
                        badgeIcon={
                            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7.5" stroke="#627EEA" strokeWidth="1" fill="none" />
                                    <path d="M4 10L7 7L9 9L12 6" stroke="#627EEA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        }
                        badgeLabel="Multi-asset"
                        extraBadge={null}
                        footerLogo={<K3Logo />}
                    />
                </div>
            </div>
        </section>
    );
}
