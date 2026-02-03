import { ShieldCheck, Bug, Globe, Coins, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function ExploreSection() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-normal font-heading text-black leading-tight tracking-tight mb-2">
            Explore Kelp
          </h2>
          <p className="text-slate-500 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Live on 10+ chains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-gray-50/50 hover:bg-gray-50 transition-colors border-gray-200 shadow-sm">
              <CardHeader className="flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg font-normal font-heading">Audits</CardTitle>
                  <CardDescription>Secured by trusted auditors.</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                    View Audits
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-gray-50/50 hover:bg-gray-50 transition-colors border-gray-200 shadow-sm">
              <CardHeader className="flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Bug className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg font-normal font-heading">Bug Bounty</CardTitle>
                  <CardDescription>Secure Kelp, earn up to $250K.</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                    Submit a Bug
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-normal font-heading flex items-center gap-2">
                    <Coins className="w-6 h-6 text-primary" />
                    Restaking Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="eth-amount" className="text-xs text-slate-500">ETH Amount</Label>
                        <Input id="eth-amount" type="number" defaultValue={100} className="text-2xl h-14 p-4 font-normal font-heading"/>
                    </div>
                    <div>
                        <Label htmlFor="apy" className="text-xs text-slate-500">Current APY</Label>
                        <div id="apy" className="text-2xl h-14 p-4 font-normal font-heading border border-input rounded-md flex items-center bg-gray-50/70">
                            2.6%
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gray-50/70 border-dashed">
                        <CardHeader>
                           <CardDescription className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" /> Monthly earnings</CardDescription>
                           <CardTitle className="text-2xl font-normal font-heading">0.22 rsETH</CardTitle>
                        </CardHeader>
                    </Card>
                     <Card className="bg-gray-50/70 border-dashed">
                        <CardHeader>
                           <CardDescription className="flex items-center gap-2 text-sm"><TrendingUp className="w-4 h-4" /> Yearly earnings</CardDescription>
                           <CardTitle className="text-2xl font-normal font-heading">2.60 rsETH</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
                <Button className="w-full h-12 text-base">
                  Restake now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
