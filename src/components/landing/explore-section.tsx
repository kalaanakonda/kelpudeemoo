import { ShieldCheck, Bug, Globe, Coins } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function ExploreSection() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-normal font-heading text-black leading-tight tracking-tight mb-2">
            Explore
          </h2>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Live on 10+ chains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 space-y-4 flex flex-col">
            <Card className="bg-gray-100 border-gray-200 flex-1">
              <CardHeader className="flex-row items-start gap-3 p-4">
                <div className="p-2 bg-primary/10 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <CardTitle className="text-sm font-normal font-heading">Audits</CardTitle>
                  <CardDescription className="text-xs">Secured by trusted auditors.</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-1 text-primary text-xs">
                    View Audits
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-gray-100 border-gray-200 flex-1">
              <CardHeader className="flex-row items-start gap-3 p-4">
                <div className="p-2 bg-primary/10 text-primary">
                  <Bug className="w-4 h-4" />
                </div>
                <div>
                  <CardTitle className="text-sm font-normal font-heading">Bug Bounty</CardTitle>
                  <CardDescription className="text-xs">Secure Kelp, earn up to $250K.</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-1 text-primary text-xs">
                    Submit a Bug
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full border-gray-200 flex flex-col">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base font-normal font-heading flex items-center gap-2">
                    <Coins className="w-4 h-4 text-primary" />
                    Restaking Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-4">
                      <div>
                          <Label htmlFor="eth-amount" className="text-xs text-slate-500">ETH Amount</Label>
                          <Input id="eth-amount" type="number" defaultValue={100} className="text-base h-10 p-3 font-normal font-heading"/>
                      </div>
                      <div className="grid grid-cols-3 gap-3 border-t border-b border-gray-100 py-4">
                          <div>
                              <Label className="text-xs text-slate-500">Current APY</Label>
                              <div className="text-base font-normal font-heading mt-1">
                                  2.6%
                              </div>
                          </div>
                          <div>
                              <Label className="text-xs text-slate-500">Monthly earnings</Label>
                              <div className="text-base font-normal font-heading mt-1">0.22 rsETH</div>
                          </div>
                          <div>
                              <Label className="text-xs text-slate-500">Yearly earnings</Label>
                              <div className="text-base font-normal font-heading mt-1">2.60 rsETH</div>
                          </div>
                      </div>
                  </div>
                </div>
                <Button className="w-full h-10 text-sm">
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
